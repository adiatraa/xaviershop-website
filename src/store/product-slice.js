import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
    error: null,
    form: {
      name: "",
      description: "",
      price: "",
      stock: "",
      categoryId: "",
      image: "",
      imagePreview: "",
    },
  },
  reducers: {
    fetch: (state, action) => {
      const products = action.payload;
      state.items = [...products];
    },
    fetchLoading: (state, action) => {
      const loadingValue = action.payload;
      state.loading = loadingValue;
    },
    productsDelete: (state, action) => {
      const id = action.payload;
      const newProducts = state.items.filter((product) => product.id !== id);
      state.items = [...newProducts];
    },
    getError: (state, action) => {
      const error = action.payload;
      state.error = error;
    },
    addForm: (state, action) => {
      const form = action.payload;
      state.form[form.name] = form.value;
    },
    setFormReset: (state, action) => {
      state.form = {
        name: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "",
        image: "",
        imagePreview: "",
      };
    },
    setImagePreview: (state, action) => {
        state.form.imagePreview = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  fetch,
  fetchLoading,
  productsDelete,
  getError,
  addForm,
  setFormReset,
  setImagePreview,
} = productSlice.actions;

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(fetchLoading(true));
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/buyerPage");
    }

    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/products?category=1",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const products = response.data.rows;
      dispatch(fetch(products));
      dispatch(fetchLoading(false));
      // setProducts(products);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };
}

export function deleteProducts(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading(true));
      const token = localStorage.getItem("access_token");
      const response = await axios.delete(
        import.meta.env.VITE_BASE_URL + "/products/" + id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch(productsDelete(id));
    } catch (err) {
      dispatch(getError(err));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export default productSlice.reducer;
