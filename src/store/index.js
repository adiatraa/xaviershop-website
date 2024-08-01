import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import productReducer from "./product-slice"
import alertReducer from "./alert-slice"
import publicProductSlice from './public-product-slice';
import cartReducer from './cart-slice';
import authReducer from './auth-slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    alert: alertReducer,
    publicProduct: publicProductSlice,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});