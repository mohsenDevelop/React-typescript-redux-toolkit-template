import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {Middleware} from '@reduxjs/toolkit';

import {AUTH_LOGIN_URL, _TOKEN_NAME} from './urls';

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload === 404) {
      return;
      // TODO: Show snackbar
    }

    if (action?.payload === 401) {
      // TODO: Show snackbar
      window.location.replace(AUTH_LOGIN_URL);
      localStorage.removeItem(_TOKEN_NAME);
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
