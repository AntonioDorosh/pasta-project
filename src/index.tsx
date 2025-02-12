import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import {router} from "@/shared/routing/router";
import {Global} from "@/shared/styles/styled-components/Global/Global";

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <Global/>
  </QueryClientProvider>,
);
