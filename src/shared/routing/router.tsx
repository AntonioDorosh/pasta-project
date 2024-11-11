import {createBrowserRouter} from "react-router-dom";
import {App} from "@/App";
import {Order} from "@/pages/Order/Order";
import {ProductDetails} from "@/components/Product/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Order/>,
  },
  {
    path: '/products/:id',
    element: <ProductDetails/>
  }
]);
