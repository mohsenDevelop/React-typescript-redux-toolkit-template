import { api } from './api';
import {
    Cars,
} from '@typings';

export const carsApi = api.injectEndpoints({

    endpoints: (build) => ({
        carsList: build.query<Cars[], unknown>({
            query: () => ({
                url: '/api/product/vehicle/types',
            }),
            providesTags: ['Cars'],
        }),
    }),
});

export const {
    useCarsListQuery,
} = carsApi;