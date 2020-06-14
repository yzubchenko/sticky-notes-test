import { RootStore } from '..';
import { NoteId } from './types';
import { getBoundedPosition } from '../noteBoard/getters';

export const getNoteById = (store: RootStore, id: NoteId) => store.notes.notes[id];

export const getEditingNoteId = (store: RootStore) => store.notes.editingNoteId;

export const getOrderedNotes = (store: RootStore) =>
    store.notes.order.map((noteId) => getNoteById(store, noteId));

export const getBoundedNoteById = (store: RootStore, id: NoteId) => {
    const note = getNoteById(store, id);
    return {
        ...note,
        position: getBoundedPosition(store, { ...note.position, ...note.size }, !note.isMoving),
    };
};
