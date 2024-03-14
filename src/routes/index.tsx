import { createBrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { PackagesRoutes } from './PackagesRoutes';

export const router = createBrowserRouter([
  AuthRoutes,
  PackagesRoutes,
]);
