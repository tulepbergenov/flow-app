import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";
import { AntDesignProvider, ReactQueryProvider } from "./components";

export const Providers = () => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <AntDesignProvider>
          <Outlet />
        </AntDesignProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};
