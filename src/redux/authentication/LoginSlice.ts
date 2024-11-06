import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    SetEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    SetPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { SetEmail, SetPassword } = loginSlice.actions;

export default loginSlice.reducer;
