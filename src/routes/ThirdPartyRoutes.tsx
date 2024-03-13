import { PANEL_PACKAGE_THIRD_PARTY_CAR_URL, PANEL_PACKAGE_THIRD_PARTY_COMPANY_URL, PANEL_PACKAGE_THIRD_PARTY_DISCOUNT_URL, PANEL_PACKAGE_THIRD_PARTY_URL } from '@configs';

export const ThirdPartyRoutes = {
  path: PANEL_PACKAGE_THIRD_PARTY_URL,
  children: [
    {
      path: PANEL_PACKAGE_THIRD_PARTY_CAR_URL,
      element: <div>CARD</div>,
    },
    {
      path: PANEL_PACKAGE_THIRD_PARTY_COMPANY_URL,
      element: <div>COMPANY</div>,
    },
    {
      path: PANEL_PACKAGE_THIRD_PARTY_DISCOUNT_URL,
      element: <div>DISCOUNT</div>,
    },
  ],
};
