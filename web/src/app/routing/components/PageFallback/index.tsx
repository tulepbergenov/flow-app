import { css } from "@emotion/react";
import { Spin } from "antd";

export const PageFallback = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100svh;
        width: 100svw;
      `}
    >
      <Spin size="large" spinning />
    </div>
  );
};
