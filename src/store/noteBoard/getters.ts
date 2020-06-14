import { RootStore } from '..';

export type Rect = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export const getBoundedPosition = (store: RootStore, rect: Rect, excludeTrashZone?: boolean) => {
    const boundingRect = getNoteBoardSize(store);
    const trashZoneBoundingRect = getTrashZoneBoundingRect(store);
    const trashZoneWidth = trashZoneBoundingRect.right - trashZoneBoundingRect.left;
    const { x, y, width, height } = rect;
    const extra = excludeTrashZone ? trashZoneWidth : 0;
    return {
        x: Math.min(Math.max(x, 0), boundingRect.width - width - extra),
        y: Math.min(Math.max(y, 0), boundingRect.height - height),
    };
};

export const getNoteBoardSize = (store: RootStore) => store.noteBoard.size;

export const isTrashZoneActive = (store: RootStore) => store.noteBoard.isTrashZoneActive;

export const getTrashZoneBoundingRect = (store: RootStore) => store.noteBoard.trashZoneBoundingRect;

export const isRectIntersectsTrashZone = (store: RootStore, rect: Rect) => {
    const { top, bottom, left, right } = getTrashZoneBoundingRect(store);
    return (
        rect.y + rect.height > top &&
        rect.x + rect.width > left &&
        rect.y < bottom &&
        rect.x < right
    );
};
