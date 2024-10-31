import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { Order } from "@/pages/Order/Order";

export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cart"} element={<Order />} />
    </Routes>
  );
};
