import { configureStore } from '@reduxjs/toolkit';
import counterRducer from './feature/CounterSlice';
import todoRducer from './feature/TodoSlice';
import { postApi } from './api/PostApi';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    counter: counterRducer,
    todos: todoRducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
