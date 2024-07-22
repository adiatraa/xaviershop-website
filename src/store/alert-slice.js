import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alertMessage: "",
  alertType: ""
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertMessage(state, action) {
      state.alertMessage = action.payload;
    },
    setAlertType(state, action) {
      state.alertType = action.payload;
    },
    clearAlert(state) {
      state.alertMessage = "";
      state.alertType = "";
    }
  }
});

export const { setAlertMessage, setAlertType, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
