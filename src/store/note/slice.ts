import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteId, NotePosition } from './types';

export type NoteSliceState = {
    editingNoteId?: NoteId;
    order: NoteId[];
    notes: { [key in NoteId]: Note };
};

const noteSlice = createSlice({
    name: 'note',
    initialState: { order: [], notes: {} } as NoteSliceState,
    reducers: {
        fetchNoteSuccess(state, { payload }: PayloadAction<NoteSliceState>) {
            const { notes, order } = payload;
            state.order = order;
            state.notes = notes;
        },

        createNoteSuccess(state, { payload }: PayloadAction<{ note: Note; order: NoteId[] }>) {
            const { note, order } = payload;
            state.order = order;
            state.notes[note.id] = note;
        },

        bringToFrontNote(state, { payload }: PayloadAction<NoteId>) {
            const id = payload;
            state.order = state.order.sort((a: NoteId, b: NoteId) => {
                if (a === id) {
                    return 1;
                }
                if (b === id) {
                    return -1;
                }
                return 0;
            });
        },

        startMoveNote(state, action: PayloadAction<{ id: NoteId; pickPosition: NotePosition }>) {
            const { id } = action.payload;
            state.notes[id].isMoving = true;
        },

        startResizeNote(state, { payload }: PayloadAction<NoteId>) {
            const id = payload;
            state.notes[id].isResizing = true;
        },

        releaseNote(state, { payload }: PayloadAction<NoteId>) {
            const id = payload;
            state.notes[id].isMoving = false;
            state.notes[id].isResizing = false;
        },

        updateNote(state, { payload }: PayloadAction<Note>) {
            const note = payload;
            state.notes[note.id] = note;
        },

        removeNote(state, { payload }: PayloadAction<NoteId>) {
            const id = payload;
            delete state.notes[id];
            state.order = state.order.filter((orderedNoteId: NoteId) => orderedNoteId !== id);
        },

        updateNoteText(state, { payload }: PayloadAction<{ id: NoteId; text: string }>) {
            const { id, text } = payload;
            const note = state.notes[id];
            if (note) {
                note.text = text;
            }
        },

        startEditNote(state, { payload }: PayloadAction<NoteId>) {
            const id = payload;
            state.editingNoteId = id;
        },

        stopEditNote(state) {
            state.editingNoteId = undefined;
        },
    },
});

const { actions, reducer } = noteSlice;

export const {
    fetchNoteSuccess,
    createNoteSuccess,
    startMoveNote,
    startResizeNote,
    startEditNote,
    releaseNote,
    stopEditNote,
    bringToFrontNote,
    updateNote,
    removeNote,
    updateNoteText,
} = actions;

export default reducer;
