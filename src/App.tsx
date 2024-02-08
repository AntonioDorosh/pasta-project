import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home.tsx"));
const CartPage = lazy(() => import("./pages/Cart.tsx"));

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <HomePage />
                    </Suspense>
                }
            />
            <Route
                path="/cart"
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <CartPage />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default App;
