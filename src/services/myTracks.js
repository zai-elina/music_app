import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getTokenAccess = () => {
  const token = JSON.parse(JSON.parse(sessionStorage.getItem('tokenData')))
  const accessToken = token.access

  return accessToken
}

export const myTracksApi = createApi({
  reducerPath: 'myTracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/catalog/track/',
  }),
  endpoints: (builder) => ({
    getAllMyTracks: builder.query({
      query: () => ({
        url: 'favorite/all/',
        headers: { Authorization: `Bearer ${getTokenAccess()}` },
      }),
    }),
  }),
})

export const { useGetAllMyTracksQuery } = myTracksApi
