import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {
  sample: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    sampleAction: (state, action: PayloadAction<boolean>) => {
      state.sample = action.payload;
      return state;
    },
  },
});

export const {sampleAction} = userSlice.actions;
