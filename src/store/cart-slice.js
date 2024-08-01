import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchPubProducts } from "./public-product-slice";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    fetchCart: (state, action) => {
      const product = action.payload;
      state.items = [...product];
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchCart } = cartSlice.actions;

export function fetchCarts() {
  return async (dispatch) => {
    try {
      dispatch(fetchPubProducts());
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/carts",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );
      const cart = response.data;
      dispatch(fetchCart(cart));
      console.log(cart);
    } catch (error) {
      console.error("Failed to fetch cart list", error);
    } finally {
    }
  };
}

export default cartSlice.reducer;
