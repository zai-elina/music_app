import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracks'
import { favoriteTracksApi } from '../services/favoriteTracks'
import { catalogSectionApi } from '../services/catalogSection'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: tracksReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
    [catalogSectionApi.reducerPath]: catalogSectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    favoriteTracksApi.middleware,
    catalogSectionApi.middleware,
  ],
})
