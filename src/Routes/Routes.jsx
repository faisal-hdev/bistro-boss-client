import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import { createBrowserRouter } from "react-router-dom";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "orderFood/:category", element: <OrderFood /> },
    ],
  },
]);
