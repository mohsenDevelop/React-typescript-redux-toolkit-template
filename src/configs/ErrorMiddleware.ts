import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

import { AUTH_URL } from './urls';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload === 404) {
      return;
      // TODO: Show snackbar
    }

    if (action?.payload === 401) {
      // TODO: Show snackbar
      window.location.replace(AUTH_URL);
      return;
    }
    if (action?.payload === 'FETCH_ERROR') {
      // TODO: Show snackbar
      return;
    }

    if (action?.error?.message === 'Rejected') {
      // TODO: Show snackbar
    }
  }

  return next(action);
};
