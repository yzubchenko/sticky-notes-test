export type NoteId = number;

export type NoteSize = {
    width: number;
    height: number;
};

export type NotePosition = {
    x: number;
    y: number;
};

export type Note = {
    id: NoteId;
    text: string;
    color: string;

    size: NoteSize;
    position: NotePosition;

    isMoving?: boolean;
    isResizing?: boolean;
};
