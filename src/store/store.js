import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/trackSlice'
import authenticationReducer from './slices/authenticationSlice'
import { tracksListApi } from '../services/trackListService'
import { catalogSectionApi } from '../services/catalogSectionService'

//configureStore объединяет все Reducers
export const store = configureStore({
  reducer: {
    audioplayer: tracksReducer,
    authentication: authenticationReducer,
    [tracksListApi.reducerPath]: tracksListApi.reducer,
    [catalogSectionApi.reducerPath]: catalogSectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tracksListApi.middleware,
    catalogSectionApi.middleware,
  ],
})
