import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DATA_TAG = { type: 'FavoriteTracks', id: 'LIST' }

const getTokenAccess = () => {
  const token = JSON.parse(JSON.parse(sessionStorage.getItem('tokenData')))
  const accessToken = token.access

  return accessToken
}

export const favoriteTracksApi = createApi({
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
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),

    likeTrack: builder.mutation({
      query(data) {
        const { id } = data
        return {
          url: `${id}/favorite/`,
          headers: { Authorization: `Bearer ${getTokenAccess()}` },
          method: 'POST',
        }
      },
      invalidatesTags: (track) => [{ type: DATA_TAG.type, id: track?.id }],
    }),

    dislikeTrack: builder.mutation({
      query(data) {
        const { id } = data
        return {
          url: `${id}/favorite/`,
          headers: { Authorization: `Bearer ${getTokenAccess()}` },
          method: 'DELETE',
        }
      },
      invalidatesTags: (track) => [{ type: DATA_TAG.type, id: track?.id }],
    }),
  }),
})

export const {
  useGetAllMyTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = favoriteTracksApi
