import React from "react";
import BlogBanner from "@/components/Blog/BlogBanner";
import HomeCrumb from "@/components/Blog/HomeCrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import CategoriesTab from "@/components/Home/RightPanel";

const Blogs = () => {
  return (
    <DefaultLayout>
      <BlogBanner>
        <HomeCrumb />
      </BlogBanner>
      <CategoriesTab />
    </DefaultLayout>
  );
};

export default Blogs;
