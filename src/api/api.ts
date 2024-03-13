import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {_TOKEN_NAME, BASE_URL} from '@configs';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers: any) => {
      const token = localStorage.getItem(_TOKEN_NAME);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: () => ({}),
});
