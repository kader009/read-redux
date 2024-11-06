import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface postState {
  text: string;
}

const initialState: postState = {
  text: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    SetText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { SetText } = postSlice.actions;

export default postSlice.reducer;
