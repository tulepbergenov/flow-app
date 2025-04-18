import "antd/dist/reset.css";

import { css, Global } from "@emotion/react";
import { App, ConfigProvider } from "antd";
import en_US from "antd/locale/en_US";

import type { LayoutType } from "@/shared/types";

import { theme } from "./AntDesignProvider.theme";

export const AntDesignProvider = ({ children }: LayoutType) => {
  return (
    <>
      <ConfigProvider locale={en_US} theme={theme}>
        <App
          css={css`
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            max-width: 100vw;
          `}
        >
          {children}
        </App>
      </ConfigProvider>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #root {
            height: 100%;
          }
        `}
      />
    </>
  );
};
