import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feature/CounterSlice';
import todoReducer from './feature/TodoSlice';
import registerReducer from './authentication/RegisterSlice';
import loginReducer from './authentication/LoginSlice';
import postReducer from './authentication/postSlice';
import { baseApi } from './authentication/baseApi';
import { postApi } from './api/PostApi';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterReducer,
    todos: todoReducer,
    register: registerReducer,
    login: loginReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware,
      postApi.middleware,
      logger
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
