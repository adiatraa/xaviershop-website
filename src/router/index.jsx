import LoginPage from '../pages/login/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import SellerPage from '../pages/Seller/SellerPage.jsx';
import BuyerPage from '../pages/Buyer/BuyerPage.jsx';
import { jwtDecode } from 'jwt-decode';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const userRole = localStorage.getItem('user_role');
          if (userRole) {
            return redirect(userRole === "seller" ? '/sellerPage' : '/buyerPage');
          } 
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
          const userRole = localStorage.getItem('user_role');
          console.log('User Role:', userRole); // Debug
          if (userRole) {
            return redirect(userRole === "seller" ? '/sellerPage' : '/buyerPage');
          } else {
            console.error("User role is undefined in localStorage");
          }
        } catch (err) {
          console.log(err);
        }
      }
      return null;
    }
  },
  {
    path: "/seller/register",
    element: <RegisterPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const userRole = localStorage.getItem('user_role');
          console.log('User Role:', userRole); // Debug
          if (userRole) {
            return redirect(userRole === "seller" ? '/sellerPage' : '/buyerPage');
          } else {
            console.error("User role is undefined in localStorage");
          }
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
    path: "/logout",
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_role');
        sessionStorage.setItem("alertMessage", "Successfully logged out");
        sessionStorage.setItem("alertType", "success");
      }
      return redirect('/');
    }
  },
]);


export default router;
