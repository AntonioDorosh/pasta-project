import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { OrderPage } from "@/pages/OrderPage/OrderPage";

export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cart"} element={<OrderPage />} />
    </Routes>
  );
};
