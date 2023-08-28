import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/auth'

const DATA_TAG = { type: 'FavoriteTracks', id: 'LIST' }

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access

      console.debug('Использую токен из стора', { token })

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

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

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }))

  const retryResult = await baseQuery(args, api, extraOptions)

  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')

  return retryResult
}

export const favoriteTracksApi = createApi({
  reducerPath: 'myTracksApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAllMyTracks: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
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
          url: `${id}/favorite/`,
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
