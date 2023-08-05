import {
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  SHUFFLE_PLAYLIST,
  SET_PLAYLIST,
  PAUSE_TRACK,
} from '../actions/types/tracks'

const initialState = {
  playing: false,
  track: null,
  playlist: {},
  shuffledPlaylists: {},
}

export default function trackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYLIST: {
      return {
        ...state,
        playlist: action.payload,
      }
    }
    case SET_CURRENT_TRACK: {
      const id = action.payload
      const toggledTrack = Object.values(state.playlist).find((item) => item.id === id)

      return {
        ...state,
        playing: true,
        track: { ...toggledTrack },
      }
    }
    default:
      return state
  }
}
