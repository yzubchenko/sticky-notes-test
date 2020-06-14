import { NoteId } from '../store/note/types';

export type UpdateNoteResult = {
    status: string;
};

export const deleteNoteAsync = (noteId: NoteId): Promise<UpdateNoteResult> =>
    new Promise((resolve) => {
        setTimeout(() => {
            const notes = JSON.parse(localStorage.getItem('notes') || '{}');
            if (!notes[noteId]) {
                return;
            }
            delete notes[noteId];

            localStorage.setItem('notes', JSON.stringify(notes));

            let order = JSON.parse(localStorage.getItem('order') || '[]');

            order = order.filter((orderedNoteId: NoteId) => orderedNoteId !== noteId);

            localStorage.setItem('order', JSON.stringify(order));

            resolve({
                status: 'success',
            });
        });
    });
