import { ActionsObservable, StateObservable, Epic } from 'redux-observable';
import { filter, map, mergeMap } from 'rxjs/operators';
import { createAction, Action } from '@reduxjs/toolkit';
import { RootStore } from '..';

import { addNoteAsync, AddNoteResult } from '../../api/addNoteAsync';

import { createNoteSuccess } from '../note/slice';
import { getNoteSize, getNoteColor } from './getters';
import { NoteDefaultSizes } from './slice';

const STICKY_NOTE_DEFAULT_TEXT = 'Double click to edit...';

const createNote = createAction('createNote');

const createNoteEpic: Epic = (
    action$: ActionsObservable<Action>,
    state$: StateObservable<RootStore>
) =>
    action$.pipe(
        filter(createNote.match),
        mergeMap(() => {
            const selectedSize = getNoteSize(state$.value);
            let size;
            switch (selectedSize) {
                case NoteDefaultSizes.SMALL:
                    size = { width: 150, height: 150 };
                    break;

                case NoteDefaultSizes.MEDIUM:
                    size = { width: 250, height: 250 };
                    break;

                case NoteDefaultSizes.LARGE:
                    size = { width: 400, height: 400 };
                    break;
            }
            const color = getNoteColor(state$.value);
            const note = {
                text: STICKY_NOTE_DEFAULT_TEXT,
                size,
                position: { x: 300, y: 300 },
                color,
            };
            return addNoteAsync(note);
        }),
        map(({ result }: AddNoteResult) => createNoteSuccess(result))
    );

export const menuEpics = [createNoteEpic];

export { createNote };
