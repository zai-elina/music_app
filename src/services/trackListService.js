import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuthentication } from '../store/slices/authenticationSlice'

const DATA_TAG = { type: 'Tracks', id: 'LIST' }
const authUser = JSON.parse(sessionStorage.getItem('user'))

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authentication?.access

      if (
        token &&
        args.queryKey !== 'getAllTracks' &&
        args.queryKey !== 'getCatalogSection' &&
        args.queryKey !== 'getCatalogSectionTracks'
      ) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

  if (
    args.queryKey === 'getAllTracks' &&
    args.queryKey === 'getCatalogSection' &&
    args.queryKey === 'getCatalogSectionTracks'
  ) {
    const returnRes = await baseQuery(args, api, extraOptions)
    return returnRes
  }

  const result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    api.dispatch(setAuth(null))
    window.location.href = '/login'
  }

  const { authentication } = api.getState()
  if (!authentication.refresh) {
    return forceLogout()
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: authentication.refresh,
      },
    },
    api,
    extraOptions
  )

  if (!refreshResult.data.access) {
    return forceLogout()
  }

  api.dispatch(
    setAuthentication({ ...authentication, access: refreshResult.data.access })
  )
  sessionStorage.setItem('access', refreshResult.data.access)

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  return retryResult
}

export const tracksListApi = createApi({
  reducerPath: 'tracksListApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: '/catalog/track/all/',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
    }),

    getCatalogSection: builder.query({
      query: () => ({
        url: '/catalog/selection/',
      }),
    }),
    getCatalogSectionTracks: builder.query({
      query: (id) => ({
        url: `/catalog/selection/${id}`,
      }),
      providesTags: (result = []) => [
        ...(Array.isArray(result)
          ? result.map(({ id }) => ({ type: DATA_TAG.type, id }))
          : []),
        DATA_TAG,
      ],
    }),

    getAllMyTracks: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
      }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
        DATA_TAG,
      ],
      transformResponse: (response) => {
        const transformedResponse = response.map((item) => ({
          ...item,
          stared_user: [authUser],
        }))

        return transformedResponse
      },
    }),

    likeTrack: builder.mutation({
      query(data) {
        const { id } = data
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: 'POST',
        }
      },
      invalidatesTags: (track) => [{ type: DATA_TAG.type, id: track?.id }],
    }),

    dislikeTrack: builder.mutation({
      query(data) {
        const { id } = data
        return {
          url: `/catalog/track/${id}/favorite/`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (track) => [{ type: DATA_TAG.type, id: track?.id }],
    }),
  }),
})

export const {
  useGetAllMyTracksQuery,
  useGetCatalogSectionQuery,
  useGetCatalogSectionTracksQuery,
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useGetAllTracksQuery,
} = tracksListApi
