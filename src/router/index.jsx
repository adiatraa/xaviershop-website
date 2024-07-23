import UserLoginPage from '../pages/login/UserLoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import SellerPage from '../pages/Seller/SellerPage.jsx';
import BuyerPage from '../pages/Buyer/BuyerPage.jsx';
import ProductFormPage from '../pages/ProductFormPage.jsx';
import { jwtDecode } from 'jwt-decode';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import SellerLoginPage from '../pages/login/SellerLoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLoginPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          return redirect("/sellerPage");
        } catch (err) {
          console.log(err);
        }
      }
      return null;
    }
  },
  {
    path: "/seller/login",
    element: <SellerLoginPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          return redirect("/sellerPage");
        } catch (err) {
          console.log(err);
        }
      }
      return null;
    }
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          return redirect("/");
        } catch (err) {
          console.log(err);
        }
      }
      return null;
    }
  },
  {
    path: "/sellerPage",
    element: <SellerPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      const redirectUrl = "/";
      if (!token) {
        sessionStorage.setItem("alertMessage", "Please login to access this page");
        sessionStorage.setItem("alertType", "error");
        return redirect(redirectUrl);
      } else {
        try {
          const decoded = jwtDecode(token);
          console.log("Token decoded successfully:", decoded);
          return null;
        } catch (err) {
          sessionStorage.setItem("alertMessage", "Please login to access this page");
          sessionStorage.setItem("alertType", "error");
          return redirect(redirectUrl);
        }
      }
    }
  },
  {
    path: "/buyerPage",
    element: <BuyerPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      const redirectUrl = "/";
      if (!token) {
        sessionStorage.setItem("alertMessage", "Please login to access this page");
        sessionStorage.setItem("alertType", "error");
        return redirect(redirectUrl);
      } else {
        try {
          const decoded = jwtDecode(token);
          console.log("Token decoded successfully:", decoded);
          return null;
        } catch (err) {
          sessionStorage.setItem("alertMessage", "Please login to access this page");
          sessionStorage.setItem("alertType", "error");
          return redirect(redirectUrl);
        }
      }
    }
  },
  {
    path: "/addProduct",
    element: <ProductFormPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      const redirectUrl = "/";
      if (!token) {
        sessionStorage.setItem("alertMessage", "Please login to access this page");
        sessionStorage.setItem("alertType", "error");
        return redirect(redirectUrl);
      } else {
        try {
          const decoded = jwtDecode(token);
          console.log("Token decoded successfully:", decoded);
          return null;
        } catch (err) {
          sessionStorage.setItem("alertMessage", "Please login to access this page");
          sessionStorage.setItem("alertType", "error");
          return redirect(redirectUrl);
        }
      }
    }
  },
  {
    path: "/editProduct",
    element: <ProductFormPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      const redirectUrl = "/";
      if (!token) {
        sessionStorage.setItem("alertMessage", "Please login to access this page");
        sessionStorage.setItem("alertType", "error");
        return redirect(redirectUrl);
      } else {
        try {
          const decoded = jwtDecode(token);
          console.log("Token decoded successfully:", decoded);
          return null;
        } catch (err) {
          sessionStorage.setItem("alertMessage", "Please login to access this page");
          sessionStorage.setItem("alertType", "error");
          return redirect(redirectUrl);
        }
      }
    }
  },
  {
    path: "/logout",
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        localStorage.removeItem('access_token');
        sessionStorage.setItem("alertMessage", "Successfully logged out");
        sessionStorage.setItem("alertType", "success");
      }
      return redirect('/');
    }
  },
]);


export default router;
