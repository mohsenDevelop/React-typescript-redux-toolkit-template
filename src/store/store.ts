import { configureStore } from '@reduxjs/toolkit';

import { api } from '@api';
import { userSlice } from '@slices';
import { rtkQueryErrorLogger } from '@configs';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(api.middleware)
      .concat(rtkQueryErrorLogger);
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
