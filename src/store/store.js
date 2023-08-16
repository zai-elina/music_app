import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/tracks'
import thunk from 'redux-thunk'
import { favoriteTracksApi } from '../services/favoriteTracks'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: trackReducer,
    [favoriteTracksApi.reducerPath]: favoriteTracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoriteTracksApi.middleware),
})
