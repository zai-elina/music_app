import {
  SET_PLAYLIST,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_PLAYLIST,
  PAUSE_TRACK
} from '../types/tracks'

export const setTrack = (id) => ({
  type: SET_CURRENT_TRACK,
  payload: id,
})

export const setPlaylist = (playlist) =>({
  type:SET_PLAYLIST,
  payload:playlist
})

export const pauseTrack = (isPlaying) =>({
  type:PAUSE_TRACK,
  payload:isPlaying
})