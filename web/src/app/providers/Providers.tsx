import { Outlet } from "react-router";

import { ErrorBoundary } from "@/components";

import { AntDesignProvider, ReactQueryProvider } from "./components";

export const Providers = () => {
  return (
    <ReactQueryProvider>
      <AntDesignProvider>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </AntDesignProvider>
    </ReactQueryProvider>
  );
};
