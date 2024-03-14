import { lazy } from 'react';

import { ROOT_URL } from '@configs';
import { MainLayout } from '@layouts';
import { Loadable } from '@components';

const AuthSignUp = Loadable(lazy(() => import('@pages/auth/signUp/SignUp')));

export const AuthRoutes = {
  path: ROOT_URL,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <AuthSignUp />,
    },
  ],
};
