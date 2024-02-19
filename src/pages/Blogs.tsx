import React from "react";
import BlogBanner from "@/components/Blog/BlogBanner";
import BlogHomeCrumb from "@/components/Blog/BlogHomeCrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import CategoriesTab from "@/components/HomePage/RightPanel";

const Blogs = () => {
  return (
    <DefaultLayout>
      <BlogBanner>
        <BlogHomeCrumb />
      </BlogBanner>
      <CategoriesTab />
    </DefaultLayout>
  );
};

export default Blogs;
