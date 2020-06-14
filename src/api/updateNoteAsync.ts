import { Note, NoteId } from '../store/note/types';

export type UpdateNoteResult = {
    status: string;
};

export const updateNoteAsync = (noteData: Note): Promise<UpdateNoteResult> =>
    new Promise((resolve) => {
        setTimeout(() => {
            const notes = JSON.parse(localStorage.getItem('notes') || '{}');
            const { id: noteId } = noteData;
            if (!notes[noteId]) {
                return;
            }
            notes[noteId] = noteData;

            localStorage.setItem('notes', JSON.stringify(notes));

            let order = JSON.parse(localStorage.getItem('order') || '[]');

            order = order.sort((a: NoteId, b: NoteId) => {
                if (a === noteId) {
                    return 1;
                }
                if (b === noteId) {
                    return -1;
                }
                return 0;
            });

            localStorage.setItem('order', JSON.stringify(order));

            resolve({
                status: 'success',
            });
        });
    });
