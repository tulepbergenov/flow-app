import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./app/routing";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
