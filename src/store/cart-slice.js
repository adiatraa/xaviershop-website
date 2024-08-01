import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchPubProducts } from "./public-product-slice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    cartsDelete: (state, action) => {
        const id = action.payload;
        const cartsNew = state.items.filter((cart) => cart.id!== id);
        state.items = [...cartsNew];
    }
  },
});

// Action creators are generated for each case reducer function
export const { fetchCart, cartsDelete } = cartSlice.actions;

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

export function deleteCarts(id) {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.delete(
          import.meta.env.VITE_BASE_URL + "/carts/" + id,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        
        if (response.status === 200) { 
          dispatch(cartsDelete(id));
          toast.success("Success delete this cart.");
        } else {
          toast.error("Error deleting cart."); 
        }
      } catch (err) {
        toast.error("Error deleting cart.");
        console.error(err);
      }
    };
  }


export default cartSlice.reducer;
