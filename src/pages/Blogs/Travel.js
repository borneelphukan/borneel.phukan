"use client";
import React from "react";
import BlogLayout from "@/layout/BlogLayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import TravelCrumb from "@/components/Blog/TravelCrumb";

const Blogs = () => {
  return (
    <BlogLayout>
      <BlogBanner>
        <TravelCrumb />
      </BlogBanner>
    </BlogLayout>
  );
};

export default Blogs;
