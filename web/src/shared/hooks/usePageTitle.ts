import { useEffect } from "react";

const DEFAULT_TITLE = "Flow";

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    if (title && typeof title === "string" && title.trim().length > 0) {
      document.title = `${title} | ${DEFAULT_TITLE}`;
    } else {
      document.title = DEFAULT_TITLE;
    }
  }, [title]);
};
