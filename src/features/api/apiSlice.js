import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiBeersSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://random-data-api.com' }),
  tagTypes: ['Beer'],
  endpoints: (builder) => ({
    getBeers: builder.query({
      query: () => '/api/beer/random_beer?size=20',
      providesTags: ['Beer'],
    }),
  }),
});

export const { useGetBeersQuery } = apiSlice;
