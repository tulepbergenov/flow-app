import { Outlet } from "react-router";

import { ErrorBoundary } from "@/components";

import { AntDesignProvider } from "./components";

export const Providers = () => {
  return (
    <AntDesignProvider>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </AntDesignProvider>
  );
};
