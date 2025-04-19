import { Typography } from "antd";

import { usePageTitle } from "@/shared/hooks";

const NotFoundPage = () => {
  usePageTitle("Not Found");

  return (
    <section>
      <Typography.Title level={1}>NotFoundPage</Typography.Title>
    </section>
  );
};

export default NotFoundPage;
