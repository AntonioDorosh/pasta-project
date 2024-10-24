import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/utils";
import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/routing/router";
import { Global } from "@/shared/styles/styled-components/Global/Global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <Global />
  </QueryClientProvider>,
);
