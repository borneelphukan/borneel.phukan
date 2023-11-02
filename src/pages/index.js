import DefaultLayout from "@/layout/DefaultLayout";

import Banner from "@/components/HomePage/Banner";
import AboutMe from "@/components/HomePage/AboutMe";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <AboutMe />
    </DefaultLayout>
  );
};

export default Home;
