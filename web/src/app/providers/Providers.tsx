import { Suspense } from "react";
import { Outlet } from "react-router";

import { AntDesignProvider } from "./components";

export const Providers = () => {
  return (
    <AntDesignProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </AntDesignProvider>
  );
};
