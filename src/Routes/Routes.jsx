import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import { createBrowserRouter } from "react-router-dom";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoutes from "./PrivetRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/Cart/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "orderFood/:category", element: <OrderFood /> },
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
      {
        path: "secret",
        element: (
          <PrivetRoutes>
            <Secret />
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoutes>
        <Dashboard />
      </PrivetRoutes>
    ),
    children: [
      { path: "cart", element: <Cart /> },
      // admin routes
      { path: "allUsers", element: <AllUsers /> },
    ],
  },
]);
