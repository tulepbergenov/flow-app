import { HomePage, NotFoundPage } from "@/pages";
import { createBrowserRouter } from "react-router";
import { Providers } from "../providers";
import { PageFallback, RouteErrorBoundary } from "./components";

export const router = createBrowserRouter([
  {
    Component: Providers,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        Component: PageFallback,
        children: [
          {
            path: "/",
            Component: HomePage,
          },
          {
            path: "*",
            Component: NotFoundPage,
          },
          {
            path: "/not-found",
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
]);
