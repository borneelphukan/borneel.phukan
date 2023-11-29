"use client";
import React from "react";
import BlogLayout from "@/layout/BlogLayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import StoryCrumb from "@/components/Blog/StoryCrumb";
import BlogCard from "@/components/card/BlogCard";

const Blogs = () => {
  return (
    <BlogLayout>
      <BlogBanner>
        <StoryCrumb />
      </BlogBanner>
      <BlogCard
        imageUrl="/gallery/Hamburg.webp"
        author="Borneel Bikash Phukan"
        title="Blog Section Coming Soon"
        description="Exciting news! My upcoming blog will be a personal space where I'll share tech insights, travel stories, and personal experiences. Dive into the latest tech trends, join me on travel adventures, and get a glimpse into my life. Stay tuned for this unique blend of tech, travel, and personal stories!"
      />
    </BlogLayout>
  );
};

export default Blogs;
