import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { OrderPage } from "@/pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <OrderPage />,
  },
]);
