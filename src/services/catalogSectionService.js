import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogSectionApi = createApi({
  reducerPath: 'catalogSectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/selection/',
  }),
  endpoints: (builder) => ({
    getCatalogSection: builder.query({
      query: () => '',
    }),
    getCatalogSectionTracks: builder.query({
      query: (id) => `${id}`,
    }),
  }),
})

export const { useGetCatalogSectionQuery, useGetCatalogSectionTracksQuery } =
  catalogSectionApi
