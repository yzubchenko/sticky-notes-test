import { RootStore } from '..';

export const getNoteSize = (store: RootStore) => store.menu.noteSize;

export const getNoteColor = (store: RootStore) => store.menu.noteColor;
