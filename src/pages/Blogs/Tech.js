"use client";
import React from "react";
import BlogLayout from "@/layout/BlogLayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import TechCrumbs from "@/components/Blog/TechCrumb";

const Blogs = () => {
  return (
    <BlogLayout>
      <BlogBanner>
        <TechCrumbs />
      </BlogBanner>
    </BlogLayout>
  );
};

export default Blogs;
