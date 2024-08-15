import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const publicProductSlice = createSlice({
  name: "publicProduct",
  initialState: {
    items: [],
    itemsDetail: {},
    loading: false,
  },
  reducers: {
    fetchProducts: (state, action) => {
      const products = action.payload;
      state.items = [...products];
    },
    fetchProductsDetail: (state, action) => {
      const products = action.payload;
      state.itemsDetail = { ...products };
    },
    fetchLoading: (state, action) => {
      const loadingValue = action.payload;
      state.loading = loadingValue;
    },
  },
});

export const { fetchProducts, fetchLoading, fetchProductsDetail } =
  publicProductSlice.actions;

export function fetchPubProducts() {
  return async (dispatch) => {
    dispatch(fetchLoading(true));

    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/pub/products?page[number]=1&category=1"
      );
      const products = response.data.rows;
      dispatch(fetchProducts(products));
      console.log(products);
    } catch (error) {
      console.error("Failed to fetch public products", error);
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export function fetchPubProductsDetail(id) {
  return async (dispatch) => {
    dispatch(fetchLoading(true));

    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/pub/products/" + id
      );
      const product = response.data;
      dispatch(fetchProductsDetail(product));
      dispatch(fetchLoading(false));
      console.log(product);
    } catch (err) {
      console.error("Failed to fetch detail products", err);
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export default publicProductSlice.reducer;
