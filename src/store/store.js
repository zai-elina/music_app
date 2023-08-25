import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracks'
import authReducer from './slices/auth'
import { favoriteTracksApi } from '../services/favoriteTracks'
import { catalogSectionApi } from '../services/catalogSection'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: tracksReducer,
    auth: authReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
    [catalogSectionApi.reducerPath]: catalogSectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    favoriteTracksApi.middleware,
    catalogSectionApi.middleware,
  ],
})
