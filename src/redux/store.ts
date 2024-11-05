import { configureStore } from '@reduxjs/toolkit';
import counterRducer from './feature/CounterSlice';
import todoRducer from './feature/TodoSlice';

export const store = configureStore({
  reducer: {
    counter: counterRducer,
    todos: todoRducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
