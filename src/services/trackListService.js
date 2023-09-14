import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuthentication } from '../store/slices/authenticationSlice'

const DATA_TAG = { type: 'Tracks', id: 'LIST' }

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access

      console.debug('Использую токен из стора', { token })

      if (token && args.queryKey !== 'getAllTracks') {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

  if (args.queryKey === 'getAllTracks') {
    const returnRes = await baseQuery(args, api, extraOptions)
    return returnRes
  }

  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(setAuth(null))
    window.location.href = '/login'
  }

  const { auth } = api.getState()
  console.debug('Данные пользователя в сторе', { auth })
  if (!auth.refresh) {
    return forceLogout()
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  )

  console.debug('Результат запроса на обновление токена', { refreshResult })

  if (!refreshResult.data.access) {
    return forceLogout()
  }

  api.dispatch(
    setAuthentication({ ...auth, access: refreshResult.data.access })
  )
  sessionStorage.setItem('access', refreshResult.data.access)

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')

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

    getAllMyTracks: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
      }),
      invalidatesTags: (track) => [{ type: DATA_TAG.type, id: track?.id }],
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
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useGetAllTracksQuery,
} = tracksListApi
