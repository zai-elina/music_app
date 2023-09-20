import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access: '',
  refresh: '',
  user: '',
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      const { access, refresh, user } = action.payload ?? initialState
      state.access = access
      state.refresh = refresh
      state.user = user
    },
  },
})

export const { setAuthentication } = authenticationSlice.actions

export default authenticationSlice.reducer
