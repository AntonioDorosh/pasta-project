import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {Cart} from "../pages/Cart.tsx";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>
    },
    {
        path: 'cart',
        element: <Cart/>
    }
]);
