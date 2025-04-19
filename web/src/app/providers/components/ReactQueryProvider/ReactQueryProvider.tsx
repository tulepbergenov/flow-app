import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { LayoutType } from "@/shared/types";

import { queryClient } from "./ReactQueryProvider.config";

export const ReactQueryProvider = ({ children }: LayoutType) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
