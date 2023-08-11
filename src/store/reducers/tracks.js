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
  shufflePlaylist: {},
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
    case NEXT_TRACK: {
      const id = action.payload
      const nextTrack = Object.values(state.playlist).find((item) => item.id === id)

      return {
        ...state,
        playing: true,
        track: { ...nextTrack },
      }
    }
    case PREV_TRACK: {
      const id = action.payload
      const prevTrack = Object.values(state.playlist).find((item) => item.id === id)

      return {
        ...state,
        playing: true,
        track: { ...prevTrack },
      }
    }
    case SHUFFLE_PLAYLIST: {
      return {
        ...state,
        shufflePlaylist: action.payload,
      }
    }
    default:
      return state
  }
}
