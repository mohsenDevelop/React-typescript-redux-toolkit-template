import { lazy } from 'react';

import { Loadable } from '@components';
import {
  PACKAGE_THIRD_PARTY_COMPANY_URL,
  PACKAGE_THIRD_PARTY_DISCOUNT_URL,
  PACKAGE_THIRD_PARTY_URL,
  ROOT_URL
} from '@configs';
import ThirdParty from '@pages/thirdParty/ThirdParty';
import { MainLayout } from '@layouts';

const Car = Loadable(lazy(() => import('@pages/thirdParty/Car/Car')));
const Company = Loadable(lazy(() => import('@pages/thirdParty/Company/Company')));

export const ThirdPartyRoutes = {
  path: ROOT_URL,
  element: <MainLayout />,
  children: [
    {
      path: PACKAGE_THIRD_PARTY_URL,
      element: <ThirdParty />,
      children: [
        {
          index: true,
          element: <Car />,
        },
        {
          path: PACKAGE_THIRD_PARTY_COMPANY_URL,
          element: <Company />,
        },
        {
          path: PACKAGE_THIRD_PARTY_DISCOUNT_URL,
          element: <div>DISCOUNT</div>,
        },
      ]
    }

  ],
};
