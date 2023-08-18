import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracks'
import { favoriteTracksApi } from '../services/favoriteTracks'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: tracksReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoriteTracksApi.middleware),
})
