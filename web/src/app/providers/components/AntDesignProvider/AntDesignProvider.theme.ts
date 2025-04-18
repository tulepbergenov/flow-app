import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

export const theme: ThemeConfig = {
  hashed: true,
  algorithm: antdTheme.defaultAlgorithm,
  cssVar: true,
  token: {
    fontFamily: "system-ui",
  },
  components: {
    Button: {
      primaryShadow: "none",
    },
  },
};
