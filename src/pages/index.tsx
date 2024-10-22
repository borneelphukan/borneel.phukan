import DefaultLayout from "@/layout/DefaultLayout";
import Banner from "@/components/Home/Banner";
import AboutMe from "@/components/Home/AboutMe";
import Categories from "@/components/Home/RightPanel";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <div className="w-full flex flex-col md:flex-row lg:flex-row ">
        <div className="my-8 md:w-4/5 lg:w-4/5">
          <AboutMe />
        </div>
        <div className="mb-10 mx-auto md:w-1/5 lg:w-1/5 md:ml-5 lg:ml-5 ">
          <Categories />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
