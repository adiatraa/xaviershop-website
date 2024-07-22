import {
  RouterProvider,
} from "react-router-dom";
import router from './router/index'
import ProductContextProvider from "./store/product-context";
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <ProductContextProvider>
          <RouterProvider router={router} />
        </ProductContextProvider>
      </Provider>
    </>
  );
}

export default App;
