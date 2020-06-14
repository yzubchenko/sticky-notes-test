import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NoteBoardSliceState = {
    size: { width: number; height: number };
    trashZoneBoundingRect: BoundingRect;
    isTrashZoneActive: boolean;
};

export type BoundingRect = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};

const noteBoardSlice = createSlice({
    name: 'noteBoard',
    initialState: {
        size: { width: 0, height: 0 },
        trashZoneBoundingRect: { top: 0, bottom: 0, left: 0, right: 0 },
        isTrashZoneActive: false,
    } as NoteBoardSliceState,
    reducers: {
        applyNoteBoardBoundingRect(state, { payload }: PayloadAction<BoundingRect>) {
            const { top, bottom, left, right } = payload;
            state.size = {
                width: right - left,
                height: bottom - top,
            };
        },
        setTrashZoneBoundingRect(state, { payload }: PayloadAction<BoundingRect>) {
            state.trashZoneBoundingRect = payload;
        },
        setTrashZoneStatus(state, { payload }: PayloadAction<boolean>) {
            state.isTrashZoneActive = payload;
        },
    },
});

const { actions, reducer } = noteBoardSlice;

export const { applyNoteBoardBoundingRect, setTrashZoneBoundingRect, setTrashZoneStatus } = actions;

export default reducer;
