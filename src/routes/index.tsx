import { createBrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { ThirdPartyRoutes } from './ThirdPartyRoutes';

export const router = createBrowserRouter([
  AuthRoutes,
  ThirdPartyRoutes,
]);
