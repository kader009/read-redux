import { configureStore } from '@reduxjs/toolkit';
import counterRducer from './feature/CounterSlice';
import todoReducer from './feature/TodoSlice';
import registerReducer from './authentication/RegisterSlice'
import loginReducer from './authentication/LoginSlice'
import { baseApi } from './authentication/baseApi';
import { postApi } from './api/PostApi';

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterRducer,
    todos: todoReducer,
    register: registerReducer,
    login: loginReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware, postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
