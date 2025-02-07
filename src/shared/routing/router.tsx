import {createBrowserRouter} from "react-router-dom";
import {App} from "@/App";
import {Order} from "@/pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Order/>,
  },
]);
