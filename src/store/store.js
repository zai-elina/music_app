import { configureStore } from "@reduxjs/toolkit"
import trackReducer from "./reducers/tracks"


//configureStore объединяет все Reducers
export const store = configureStore({
    reducer:{
        audioplayer: trackReducer,
    },
})
