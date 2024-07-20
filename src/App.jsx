import {
  RouterProvider,
} from "react-router-dom";
import router from './router/index'
import ProductContextProvider from "./context/product-context";

function App() {
  return (
    <>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </>
  );
}

export default App;
