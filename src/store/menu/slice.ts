import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NoteBoardSliceState = {
    noteSize: NoteDefaultSizes;
    noteColor: string;
};

export enum NoteDefaultSizes {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
}

export enum NoteColors {
    YELLOW = '#efee9d',
    GREEN = '#d1eaa3',
    LAVENDER = '#dbc6eb',
    BLUE = '#abc2e8',
}

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        noteSize: NoteDefaultSizes.SMALL,
        noteColor: NoteColors.YELLOW,
    } as NoteBoardSliceState,
    reducers: {
        selectNoteSize(state, { payload }: PayloadAction<NoteDefaultSizes>) {
            state.noteSize = payload;
        },
        selectNoteColor(state, { payload }: PayloadAction<string>) {
            state.noteColor = payload;
        },
    },
});

const { actions, reducer } = menuSlice;

export const { selectNoteSize, selectNoteColor } = actions;

export default reducer;
