"use client";
import React from "react";
import BlogBanner from "@/components/Blog/BlogBanner";
import TechCrumbs from "@/components/Blog/TechCrumb";
import BlogCard from "@/components/card/BlogCard";
import DefaultLayout from "@/layout/DefaultLayout";

const Blogs = () => {
  return (
    <DefaultLayout>
      <BlogBanner>
        <TechCrumbs />
      </BlogBanner>
      <BlogCard
        link="/"
        imageUrl="/gallery/Hamburg.webp"
        author="Borneel Bikash Phukan"
        title="Blog Section Coming Soon"
        description="Exciting news! My upcoming blog will be a personal space where I'll share tech insights, travel stories, and personal experiences. Dive into the latest tech trends, join me on travel adventures, and get a glimpse into my life. Stay tuned for this unique blend of tech, travel, and personal stories!"
      />
    </DefaultLayout>
  );
};

export default Blogs;
