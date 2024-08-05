import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product-slice"
import publicProductSlice from './public-product-slice';
import cartReducer from './cart-slice';
import authReducer from './auth-slice';

export default configureStore({
  reducer: {
    product: productReducer,
    publicProduct: publicProductSlice,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});