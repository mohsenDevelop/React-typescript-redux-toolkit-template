import { createBrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { PackagesRoutes } from './PackagesRoutes';
import { ThirdPartyRoutes } from './ThirdPartyRoutes';

export const router = createBrowserRouter([
  AuthRoutes,
  PackagesRoutes,
  ThirdPartyRoutes
]);
