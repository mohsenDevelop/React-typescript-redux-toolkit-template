import { api } from './api';
import {
    discount,
} from '@typings';

export const discountApi = api.injectEndpoints({

    endpoints: (build) => ({
        discountList: build.query<discount[], unknown>({
            query: () => ({
                url: '/api/product/third/third-discounts',
            }),
            providesTags: ['Discounts'],
        }),
    }),
});

export const {
    useDiscountListQuery,
} = discountApi;