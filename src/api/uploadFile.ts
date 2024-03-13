import {api} from './api';

export const uploadFileApi = api.injectEndpoints({
  endpoints: (build) => ({
    // uploadFile: build.mutation<FileResponse, any>({
    uploadFile: build.mutation<any, any>({
      query: (params) => ({
        url: '/files/upload',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export const {useUploadFileMutation} = uploadFileApi;
