import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { Cart } from "@/pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
