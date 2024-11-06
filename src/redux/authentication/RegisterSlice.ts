import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 

interface Register {
  name: string;
  email: string;
  password: string;
}

const initialState: Register = {
  name: '',
  email: '',
  password: '',
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    SetName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    SetEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    SetPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { SetName, SetEmail, SetPassword } = registerSlice.actions;

export default registerSlice.reducer;
