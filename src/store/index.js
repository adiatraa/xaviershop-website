import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice"
import productReducer from "./product-slice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
})