import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playing: false,
  track: null,
  playlist: [],
  shufflePlaylist: [],
}

export const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload
    },
    setTrack: (state, action) => {
      state.playing = true
      state.track = action.payload
    },
    setShufflePlaylist: (state, action) => {
      state.shufflePlaylist = action.payload
    },
  },
})

export const {
  setPlaylist,
  setTrack,
  setShufflePlaylist,
} = tracksSlice.actions

export default tracksSlice.reducer
