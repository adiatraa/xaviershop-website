import UserLoginPage from '../pages/login/UserLoginPage.jsx';
import RegisterPage from '../pages/SellerRegisterPage.jsx';
import SellerPage from '../pages/Seller/SellerPage.jsx';
import BuyerPage from '../pages/Buyer/BuyerPage.jsx';
import ProductFormPage from '../pages/ProductFormPage.jsx';
import ProductDetailPage from '../pages/ProductDetailPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import CartPage from '../pages/CartPage.jsx';
import { jwtDecode } from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import SellerLoginPage from '../pages/login/SellerLoginPage.jsx';
import ProductPage from '../pages/ProductPage.jsx';
import UserRegisterPage from '../pages/UserRegisterPage.jsx';
import SellerRegisterPage from '../pages/SellerRegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/productPage/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/productPage",
    element: <ProductPage />,
  },
  {
    path: "/cartPage",
    element: <CartPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log("Token decoded:", decoded);
        } catch (err) {
          console.log(err);
        }
      } else {
        return redirect("/login");
      }
      return null;
    }
  },
  {
    path: "/login",
    element: <UserLoginPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log("Token decoded:", decoded);
          return redirect("/");
        } catch (err) {
          redirect("/login");
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
    element: <UserRegisterPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          return redirect("/login");
        } catch (err) {
          console.log(err);
        }
      }
      return null;
    }
  },
  {
    path: "/seller/register",
    element: <SellerRegisterPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          return redirect("/seller/login");
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
        localStorage.removeItem('user_role');
        sessionStorage.setItem("alertMessage", "Successfully logged out");
        sessionStorage.setItem("alertType", "success");
      }
      return redirect('/login');
    }
  },
]);


export default router;
