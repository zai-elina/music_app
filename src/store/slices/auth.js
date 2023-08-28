import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access: '',
  refresh: '',
  id: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { access, refresh, user } = action.payload ?? initialState
      state.access = access
      state.refresh = refresh
      state.user = user
    },
  },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
