import { lazy } from 'react';

import { Loadable } from '@components';
import {
  PACKAGE_THIRD_PARTY_COMPANY_URL,
  PACKAGE_THIRD_PARTY_DISCOUNT_URL,
  PACKAGE_THIRD_PARTY_URL,
  ROOT_URL,
  PACKAGE_THIRD_PARTY_INQUIRY_URL
} from '@configs';
import ThirdParty from '@pages/thirdParty/ThirdParty';
import { MainLayout } from '@layouts';

const Car = Loadable(lazy(() => import('@pages/thirdParty/car/Car')));
const Company = Loadable(lazy(() => import('@pages/thirdParty/company/Company')));
const Discount = Loadable(lazy(() => import('@pages/thirdParty/discount/Discount')));
const Inquiry = Loadable(lazy(() => import('@pages/thirdParty/inquiry/Inquiry')));

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
          element: <Discount />,
        },
        {
          path: PACKAGE_THIRD_PARTY_INQUIRY_URL,
          element: <Inquiry />,
        },
      ]
    }

  ],
};
