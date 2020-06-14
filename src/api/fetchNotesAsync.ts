import { Note, NoteId } from '../store/note/types';

export type FetchNotesResult = {
    status: string;
    result: {
        notes: { [key: number]: Note };
        order: NoteId[];
    };
};

const DEFAULT_NOTE = {
    id: new Date().getTime(),
    text: 'Double click to edit...',
    color: '#efee9d',
    size: { width: 300, height: 300 },
    position: { x: 340, y: 50 },
};

export const fetchNotesAsync = (): Promise<FetchNotesResult> =>
    new Promise((resolve) => {
        setTimeout(() => {
            const isInitialized = JSON.parse(localStorage.getItem('initialized') || 'false');
            let order;
            let notes;
            if (isInitialized) {
                order = JSON.parse(localStorage.getItem('order') || '[]');
                notes = JSON.parse(localStorage.getItem('notes') || '{}');
            } else {
                notes = {
                    [DEFAULT_NOTE.id]: { ...DEFAULT_NOTE },
                };

                order = [DEFAULT_NOTE.id];
                localStorage.setItem('notes', JSON.stringify(notes));
                localStorage.setItem('order', JSON.stringify(order));
                localStorage.setItem('initialized', JSON.stringify(true));
            }

            resolve({
                status: 'success',
                result: {
                    notes,
                    order,
                },
            });
        });
    });
