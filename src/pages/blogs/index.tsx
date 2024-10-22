import React from "react";
import BlogBanner from "@/components/Blog/BlogBanner";
import DefaultLayout from "@/layout/DefaultLayout";
import CategoriesTab from "@/components/Home/RightPanel";
import BlogCrumbs from "@/components/BreadCrumb";

const Blogs = () => {
  return (
    <DefaultLayout>
      <BlogBanner>
        <BlogCrumbs />
      </BlogBanner>
      <CategoriesTab />
    </DefaultLayout>
  );
};

export default Blogs;
