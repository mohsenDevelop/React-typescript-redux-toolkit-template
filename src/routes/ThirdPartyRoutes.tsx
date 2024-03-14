import {
  PACKAGE_THIRD_PARTY_CAR_URL,
  PACKAGE_THIRD_PARTY_COMPANY_URL,
  PACKAGE_THIRD_PARTY_DISCOUNT_URL,
  PACKAGE_THIRD_PARTY_URL
} from '@configs';

export const ThirdPartyRoutes = {
  path: PACKAGE_THIRD_PARTY_URL,
  element: <div>packages</div>,
  children: [
    {
      path: PACKAGE_THIRD_PARTY_CAR_URL,
      element: <div>CARD</div>,
    },
    {
      path: PACKAGE_THIRD_PARTY_COMPANY_URL,
      element: <div>COMPANY</div>,
    },
    {
      path: PACKAGE_THIRD_PARTY_DISCOUNT_URL,
      element: <div>DISCOUNT</div>,
    },
  ],
};
