import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracksSlice'
import authenticationReducer from './slices/authenticationSlice'
import { tracksListApi } from '../services/trackListService'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: tracksReducer,
    authentication: authenticationReducer,
    [tracksListApi.reducerPath]: tracksListApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tracksListApi.middleware,
  ],
})
