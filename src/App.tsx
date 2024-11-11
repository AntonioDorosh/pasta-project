import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "@/pages/Home/Home";
import {Order} from "@/pages/Order/Order";
import {ProductDetails} from "@/components/Product/ProductDetails";

export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/cart"} element={<Order/>}/>
      <Route path={'/products/:id'} element={<ProductDetails/>}/>
    </Routes>
  );
};
