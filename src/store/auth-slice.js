import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    setAuth(state, action) {
        state.isAuthenticated = !!action.payload;
        state.token = action.payload;
    },
    clearAuth(state) {
        state.isAuthenticated = false;
        state.token = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth } = authSlice.actions

export default authSlice.reducer