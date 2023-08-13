import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/tracks'
import thunk from 'redux-thunk'
import { myTracksApi } from '../services/myTracks'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: trackReducer,
    [myTracksApi.reducerPath]: myTracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myTracksApi.middleware),
})
