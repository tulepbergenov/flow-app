import { css } from "@emotion/css";
import { Spin } from "antd";
import { Suspense } from "react";
import { Outlet } from "react-router";

export const PageFallback = () => {
  return (
    <Suspense
      fallback={
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1 auto;
          `}
        >
          <Spin size="large" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};
