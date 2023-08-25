import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access: null,
  refresh: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { access, refresh } = action.payload
      state.access = access
      state.refresh = refresh
    },
  },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer
