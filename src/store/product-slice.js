import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetch: (state, action) => {
      const products = action.payload;
      state.items = [...products];
    },
    fetchLoading: (state, action) => {
        const loadingValue = action.payload;
        state.loading = loadingValue;
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetch, fetchLoading } = productSlice.actions

export default productSlice.reducer