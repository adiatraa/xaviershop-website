import { RouterProvider } from "react-router-dom";
import router from './router/index';
import ProductContextProvider from "./store/product-context";
import store from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProductContextProvider>
          <RouterProvider router={router}/>
        </ProductContextProvider>
      </Provider>
    </>
  );
}

export default App;
