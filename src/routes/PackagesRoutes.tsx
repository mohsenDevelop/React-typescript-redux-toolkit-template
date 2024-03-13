import { PANEL_PACKAGES_URL } from '@configs';
import { MainLayout } from '@layouts';
import { ThirdPartyRoutes } from './ThirdPartyRoutes';

export const PackagesRoutes = {
    path: PANEL_PACKAGES_URL,
    element: <MainLayout />,
    children: [
        ThirdPartyRoutes
    ],
};
