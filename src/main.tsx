import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./routing/router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {Global} from "./styles";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <Global/>
        </Provider>
    </React.StrictMode>,
)
