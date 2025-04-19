import { css } from "@emotion/react";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <main
      css={css`
        flex: 1 1 auto;
      `}
    >
      <Outlet />
    </main>
  );
};
