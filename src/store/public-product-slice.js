import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const publicProductSlice = createSlice({
  name: "publicProduct",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetchProducts: (state, action) => {
      const products = action.payload;
      state.items = [...products];
    },
    fetchLoading: (state, action) => {
      const loadingValue = action.payload;
      state.loading = loadingValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProducts, fetchLoading } = publicProductSlice.actions;

export function fetchPubProducts() {
  return async (dispatch) => {
    dispatch(fetchLoading(true));

    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/pub/products"
      );
      const products = response.data.rows;
      dispatch(fetchProducts(products));
      dispatch(fetchLoading(false));
    } catch (error) {
      console.error("Failed to fetch public products", error);
    }
  };
}

export default publicProductSlice.reducer;
