import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";

const App = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
    );
};

export default App;