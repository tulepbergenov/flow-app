import { usePageTitle } from "@/shared/hooks";

const HomePage = () => {
  usePageTitle("Home");

  return (
    <section>
      <h1>HomePage</h1>
    </section>
  );
};

export default HomePage;
