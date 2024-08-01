import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    user_role: localStorage.getItem('user_role') || 'user',
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
    setRole(state, action) {
      state.user_role = action.payload;
      localStorage.setItem('user_role', action.payload);
  },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth, setRole } = authSlice.actions

export default authSlice.reducer