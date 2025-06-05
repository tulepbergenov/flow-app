import "@/shared/styles/index.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600-italic.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/700.css";
import "antd/dist/reset.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router";

const appElement = document.getElementById("root");

if (!appElement) {
  throw new Error("Root element with id 'root' not found");
}

createRoot(appElement).render(<RouterProvider router={router} />);
