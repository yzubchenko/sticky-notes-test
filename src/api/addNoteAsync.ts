import { Note, NoteId } from '../store/note/types';

export type AddNoteResult = {
    status: string;
    result: {
        note: Note;
        order: NoteId[];
    };
};

export const addNoteAsync = (noteData: Omit<Note, 'id'>): Promise<AddNoteResult> =>
    new Promise((resolve) => {
        setTimeout(() => {
            const noteId = new Date().getTime();

            const notes = JSON.parse(localStorage.getItem('notes') || '{}');
            localStorage.setItem(
                'notes',
                JSON.stringify({
                    ...notes,
                    [noteId]: { id: noteId, ...noteData },
                })
            );

            const order = JSON.parse(localStorage.getItem('order') || '[]');
            order.push(noteId);
            localStorage.setItem('order', JSON.stringify(order));

            resolve({
                status: 'success',
                result: {
                    note: {
                        id: noteId,
                        ...noteData,
                    },
                    order,
                },
            });
        });
    });
