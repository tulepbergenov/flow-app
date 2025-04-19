import { usePageTitle } from "@/shared/hooks";

const NotFoundPage = () => {
  usePageTitle("Not Found");

  return (
    <section>
      <h1>NotFoundPage</h1>
    </section>
  );
};

export default NotFoundPage;
