import { PACKAGES_URL } from '@configs';
import { MainLayout } from '@layouts';
import { ThirdPartyRoutes } from './ThirdPartyRoutes';

export const PackagesRoutes = {
    path: PACKAGES_URL,
    element: <MainLayout />,
    children: [
        ThirdPartyRoutes
    ],
};
