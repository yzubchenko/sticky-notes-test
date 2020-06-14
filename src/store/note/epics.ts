import { ActionsObservable, StateObservable, Epic } from 'redux-observable';
import { fromEvent, from, of } from 'rxjs';
import { pluck, filter, map, tap, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { createAction, Action } from '@reduxjs/toolkit';
import { fetchNotesAsync, FetchNotesResult } from '../../api/fetchNotesAsync';
import { RootStore } from '..';
import { NoteId } from './types';
import {
    fetchNoteSuccess,
    updateNote,
    stopEditNote,
    removeNote,
    startMoveNote,
    startResizeNote,
    releaseNote,
} from './slice';
import { updateNoteAsync } from '../../api/updateNoteAsync';
import { getNoteById, getEditingNoteId, getBoundedNoteById } from './getters';
import {
    getBoundedPosition,
    getNoteBoardSize,
    isRectIntersectsTrashZone,
} from '../noteBoard/getters';
import { deleteNoteAsync } from '../../api/deleteNoteAsync';
import { applyNoteBoardBoundingRect, setTrashZoneStatus } from '../noteBoard/slice';

const STICKY_NOTE_MIN_SIZE = 100; // px

const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

const fetchNotes = createAction('fetchNotes');

const checkStopEditingNote = createAction('checkStopEditingNote');

const checkNeedRemoveNote = createAction<NoteId>('checkNeedRemoveNote');

const fetchNotesEpic: Epic = (action$: ActionsObservable<Action>) => {
    return action$.pipe(
        filter(fetchNotes.match),
        switchMap(fetchNotesAsync),
        map(({ result }: FetchNotesResult) => fetchNoteSuccess(result))
    );
};

const moveNoteEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootStore>
) =>
    action$.pipe(
        filter(startMoveNote.match),
        pluck('payload'),
        map(({ id, pickPosition }) => ({
            targetNote: getBoundedNoteById(state$.value, id),
            pickPosition,
        })),
        switchMap(({ targetNote, pickPosition }) =>
            mousemove$.pipe(
                mergeMap((move) => {
                    move.preventDefault();
                    const { position } = targetNote;

                    const updatedNote = {
                        ...targetNote,
                        position: getBoundedPosition(state$.value, {
                            x: position.x + (move.clientX - pickPosition.x),
                            y: position.y + (move.clientY - pickPosition.y),
                            ...targetNote.size,
                        }),
                    };

                    return of(
                        updateNote(updatedNote),
                        setTrashZoneStatus(
                            isRectIntersectsTrashZone(state$.value, {
                                ...updatedNote.size,
                                ...updatedNote.position,
                            })
                        )
                    );
                }),
                takeUntil(
                    mouseup$.pipe(
                        map(() => getNoteById(state$.value, targetNote.id)),
                        tap((note) => note && updateNoteAsync(note))
                    )
                )
            )
        )
    );

const checkNeedRemoveNoteEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootStore>
) =>
    action$.pipe(
        filter(checkNeedRemoveNote.match),
        pluck('payload'),
        map((id) => getNoteById(state$.value, id)),
        mergeMap((note) => {
            if (!note.isMoving) {
                return of(setTrashZoneStatus(false));
            }

            if (isRectIntersectsTrashZone(state$.value, { ...note.position, ...note.size })) {
                deleteNoteAsync(note.id);
                return of(removeNote(note.id), setTrashZoneStatus(false));
            }
            return of(releaseNote(note.id), setTrashZoneStatus(false));
        })
    );

const resizeNoteEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootStore>
) =>
    action$.pipe(
        filter(startResizeNote.match),
        pluck('payload'),
        map((id) => getNoteById(state$.value, id)),
        switchMap((targetNote) =>
            mousemove$.pipe(
                map((move) => {
                    move.preventDefault();
                    const { position } = targetNote;
                    const calculatedWidth = move.clientX - position.x;
                    const calculatedHeight = move.clientY - position.y;
                    const boardSize = getNoteBoardSize(state$.value);
                    const updatedSize = {
                        width: Math.min(
                            Math.max(STICKY_NOTE_MIN_SIZE, calculatedWidth),
                            boardSize.width
                        ),
                        height: Math.min(
                            Math.max(STICKY_NOTE_MIN_SIZE, calculatedHeight),
                            boardSize.height
                        ),
                    };
                    const updatedPosition = getBoundedPosition(
                        state$.value,
                        { ...updatedSize, ...targetNote.position },
                        true
                    );
                    const updatedNote = {
                        ...targetNote,
                        size: updatedSize,
                        position: updatedPosition,
                    };
                    return updateNote(updatedNote);
                }),
                takeUntil(
                    mouseup$.pipe(
                        map(() => getNoteById(state$.value, targetNote.id)),
                        tap((note) => note && updateNoteAsync(note))
                    )
                )
            )
        )
    );

const noteBoardSizeUpdateEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootStore>
) =>
    action$.pipe(
        filter(applyNoteBoardBoundingRect.match),
        pluck('payload'),
        mergeMap(() => {
            return from(state$.value.notes.order as []);
        }),
        map((id) => getBoundedNoteById(state$.value, id)),
        map(updateNote)
    );

const checkStopEditingNoteEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootStore>
) =>
    action$.pipe(
        filter(checkStopEditingNote.match),
        map(() => getEditingNoteId(state$.value)),
        filter((id) => id !== undefined),
        map((id) => getNoteById(state$.value, id as number)),
        tap(updateNoteAsync),
        map(() => stopEditNote())
    );

export const noteEpics = [
    fetchNotesEpic,
    moveNoteEpic,
    resizeNoteEpic,
    checkStopEditingNoteEpic,
    checkNeedRemoveNoteEpic,
    noteBoardSizeUpdateEpic,
];

export { fetchNotes, checkStopEditingNote, checkNeedRemoveNote };
