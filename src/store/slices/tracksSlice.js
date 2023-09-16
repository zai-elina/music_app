import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playing: false,
  track: null,
  playlist: {},
  shufflePlaylist: {},
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
    nextTrack: (state, action) => {
      const id = action.payload
      const nextTrack = Object.values(state.playlist).find(
        (item) => item.id === id
      )

      state.playing = true
      state.track = { ...nextTrack }
    },
    prevTrack: (state, action) => {
      const id = action.payload
      const prevTrack = Object.values(state.playlist).find(
        (item) => item.id === id
      )

      state.playing = true
      state.track = { ...prevTrack }
    },
    setShufflePlaylist: (state, action) => {
      state.shufflePlaylist = action.payload
    },
  },
})

export const {
  setPlaylist,
  setTrack,
  nextTrack,
  prevTrack,
  setShufflePlaylist,
} = tracksSlice.actions

export default tracksSlice.reducer
