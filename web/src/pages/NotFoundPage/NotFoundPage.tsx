import { usePageTitle } from "@/shared/hooks";

const HomePage = () => {
  usePageTitle("Not Found");

  return (
    <section>
      <h1>Not Found</h1>
    </section>
  );
};

export default HomePage;
