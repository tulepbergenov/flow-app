import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import { HomePage, NotFoundPage } from "@/pages";

import { AppLayout } from "../layouts";
import { Providers } from "../providers";
import { PageFallback } from "./components";

export const router = createBrowserRouter([
  {
    element: <Providers />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<PageFallback />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<PageFallback />}>
                <NotFoundPage />
              </Suspense>
            ),
          },
          {
            path: "/not-found",
            element: (
              <Suspense fallback={<PageFallback />}>
                <NotFoundPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
