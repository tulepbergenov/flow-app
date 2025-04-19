import { Typography } from "antd";

import { usePageTitle } from "@/shared/hooks";

const HomePage = () => {
  usePageTitle();

  return (
    <section>
      <Typography.Title level={1}>HomePage</Typography.Title>
    </section>
  );
};

export default HomePage;
