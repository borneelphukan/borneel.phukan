import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import Banner from "@/components/HomePage/Banner";
import AboutMe from "@/components/HomePage/AboutMe";
import CategoriesTab from "@/components/HomePage/RightPanel";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <div className="w-full flex flex-col md:flex-row lg:flex-row ">
        <div className="my-8 md:w-4/5 lg:w-4/5">
          <AboutMe />
        </div>
        <div className="mb-10 mx-auto md:w-1/5 lg:w-1/5 md:ml-5 lg:ml-5 ">
          <CategoriesTab />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
