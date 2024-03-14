import { lazy } from 'react';

import { PACKAGES_URL } from '@configs';
import { MainLayout } from '@layouts';
import { Loadable } from '@components';

const Packages = Loadable(lazy(() => import('@pages/packages/Packages')));

export const PackagesRoutes = {
    path: PACKAGES_URL,
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Packages />,

        },
    ],
};
