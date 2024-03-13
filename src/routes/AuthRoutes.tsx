import { lazy } from 'react';

import { AUTH_URL } from '@configs';
import { MainLayout } from '@layouts';
import { Loadable } from '@components';

const AuthSignUp = Loadable(lazy(() => import('@pages/auth/signUp/SignUp')));

export const AuthRoutes = {
  path: AUTH_URL,
  element: <MainLayout />,
  children: [
    {
      path: AUTH_URL,
      index: true,
      element: <AuthSignUp />,
    },
  ],
};
