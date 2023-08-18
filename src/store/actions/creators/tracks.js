import {
  SET_PLAYLIST,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_PLAYLIST,
} from '../types/tracks'

export const setTrack = (id) => ({
  type: SET_CURRENT_TRACK,
  payload: id,
})

export const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  payload: playlist,
})

export const nextTrack = (id) => ({
  type: NEXT_TRACK,
  payload: id,
})

export const prevTrack = (id) => ({
  type: PREV_TRACK,
  payload: id,
})

export const setShufflePlaylist = (newpPlaylist) => ({
  type: SHUFFLE_PLAYLIST,
  payload: newpPlaylist,
})
