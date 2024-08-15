import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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
    formAction: "create",
    editId: "",
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
    editForm: (state, action) => {
      state.form = {
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        stock: action.payload.stock,
        categoryId: action.payload.categoryId,
        image: action.payload.image,
        imagePreview: action.payload.imagePreview,
      };
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
    },
    setFormActionValue: (state, action) => {
      state.formAction = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
  },
});

export const {
  fetch,
  fetchLoading,
  productsDelete,
  getError,
  addForm,
  setFormReset,
  setImagePreview,
  editForm,
  setFormActionValue,
  setEditId,
} = productSlice.actions;

export function fetchProducts(navigate) {
  return async (dispatch) => {
    dispatch(fetchLoading(true));
    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/products?page[number]=1&category=1",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const products = response.data.rows;
      dispatch(fetch(products));
      dispatch(fetchLoading(false));
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
      toast.success("Success delete this product.");
    } catch (err) {
      dispatch(getError(err));
      toast.error("Error deleting product.");
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export function editProducts(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading(true));
      const token = localStorage.getItem("access_token");
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/products/" + id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch(editForm(response.data));
      dispatch(setFormActionValue("edit"));
      dispatch(setEditId(id));
    } catch (err) {
      dispatch(getError(err));
    } finally {
      dispatch(fetchLoading(false));
      dispatch(setFormActionValue("edit"));
    }
  };
}

export default productSlice.reducer;
