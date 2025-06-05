import { useTitle } from "react-use";

const BASE_TITLE = "Flow";

export const usePageTitle = (title?: string) => {
  useTitle(
    title && typeof title === "string" && title.trim().length
      ? `${title} | ${BASE_TITLE}`
      : BASE_TITLE,
  );
};
