import { api } from './api';
import {
    Company,
} from '@typings';

export const companyApi = api.injectEndpoints({

    endpoints: (build) => ({
        companyList: build.query<Company[], unknown>({
            query: () => ({
                url: '/api/product/third/companies',
            }),
            providesTags: ['Companies'],
        }),
    }),
});

export const {
    useCompanyListQuery,
} = companyApi;