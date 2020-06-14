import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { compose } from 'redux';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import noteReducer from './note/slice';
import noteBoardReducer from './noteBoard/slice';
import menuReducer from './menu/slice';
import { noteEpics } from './note/epics';
import { menuEpics } from './menu/epics';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: {
        notes: noteReducer,
        noteBoard: noteBoardReducer,
        menu: menuReducer,
    },
    middleware: [epicMiddleware, ...getDefaultMiddleware({ thunk: false })],
});

epicMiddleware.run(combineEpics(...noteEpics, ...menuEpics));

export type RootStore = ReturnType<typeof store.getState>;
export { store };
