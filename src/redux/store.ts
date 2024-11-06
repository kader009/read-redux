import { configureStore } from '@reduxjs/toolkit';
import counterRducer from './feature/CounterSlice';
import todoReducer from './feature/TodoSlice';
import { postApi } from './api/PostApi';
import registerReducer from './authentication/RegisterSlice'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    counter: counterRducer,
    todos: todoReducer,
    register: registerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
