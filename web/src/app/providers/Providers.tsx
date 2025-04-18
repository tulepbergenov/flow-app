import { ReactNode } from "react";
import { AntDesignProvider } from "./components";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <AntDesignProvider>{children}</AntDesignProvider>;
};
