import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  user: {
    name: '',
    family: '',
    mobile: '',
  }
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserProfileAction: (state, action: PayloadAction<{ name: string, family: string, mobile: string }>) => {
      state.user = action.payload;
      return state;
    },
  },
});

export const { setUserProfileAction } = userSlice.actions;
