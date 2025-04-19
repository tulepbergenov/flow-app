import { createBrowserRouter } from "react-router";

import { HomePage, NotFoundPage } from "@/pages";

import { AppLayout } from "../layouts";
import { Providers } from "../providers";
import { withSuspense } from "./libs";

export const router = createBrowserRouter([
  {
    element: <Providers />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: withSuspense(<HomePage />),
          },
          {
            path: "*",
            element: withSuspense(<NotFoundPage />),
          },
          {
            path: "/not-found",
            element: withSuspense(<NotFoundPage />),
          },
        ],
      },
    ],
  },
]);
