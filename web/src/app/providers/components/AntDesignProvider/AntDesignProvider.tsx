import type { LayoutType } from "@/shared/types";
import { css } from "@emotion/css";
import {
  App,
  ConfigProvider,
  theme as baseAntDesignTheme,
  type ThemeConfig,
} from "antd";
import en_US from "antd/locale/en_US";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export const AntDesignProvider = ({ children }: LayoutType) => {
  const theme = useTheme();

  const antDesignTheme: ThemeConfig = useMemo(
    () => ({
      algorithm:
        theme.resolvedTheme === "dark"
          ? baseAntDesignTheme.darkAlgorithm
          : baseAntDesignTheme.defaultAlgorithm,
      cssVar: true,
      hashed: true,
      token: {
        fontFamily: "'Roboto', sans-serif, system-ui",
      },
      components: {
        Button: {
          primaryShadow: "none",
        },
      },
    }),
    [theme.resolvedTheme],
  );

  return (
    <ConfigProvider
      componentSize="middle"
      locale={en_US}
      theme={antDesignTheme}
    >
      <App
        className={css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `}
      >
        {children}
      </App>
    </ConfigProvider>
  );
};
