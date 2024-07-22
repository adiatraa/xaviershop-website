import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

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

export function fetchProducts() {
    return async (dispatch) => {
        dispatch(fetchLoading(true));
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate("/buyerPage");
        }
    
        try {
            const response = await axios.get(
                import.meta.env.VITE_BASE_URL + "/products?category=1",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    }
                }
            );
            const products = response.data.rows;
            dispatch(fetch(products));
            dispatch(fetchLoading(false));
            // setProducts(products);
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    }
}

export default productSlice.reducer