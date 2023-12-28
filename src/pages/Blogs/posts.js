// pages/posts.js
import React, { useEffect, useState } from "react";
import BlogBanner from "@/components/Blog/BlogBanner";
import BlogHomeCrumb from "@/components/Blog/BlogHomeCrumb";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogCard from "@/components/card/BlogCard";
import Link from "next/link";

const Blogs = () => {
  const [postMetaData, setPostMetaData] = useState([]);

  useEffect(() => {
    const fetchPostMetaData = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPostMetaData(data);
    };

    fetchPostMetaData();
  }, []);

  const postPreviews = postMetaData.map((slug) => (
    <div key={slug}>
      <Link href={`/posts/${slug}`}>
        <BlogCard
          imageUrl="/gallery/Hamburg.webp"
          author="Borneel Bikash Phukan"
          title={slug}
          description="Exciting news! My upcoming blog will be a personal space where I'll share tech insights, travel stories, and personal experiences. Dive into the latest tech trends, join me on travel adventures, and get a glimpse into my life. Stay tuned for this unique blend of tech, travel, and personal stories!"
        />
      </Link>
    </div>
  ));

  return (
    <DefaultLayout>
      <BlogBanner>
        <BlogHomeCrumb />
      </BlogBanner>
      <div>{postPreviews}</div>
    </DefaultLayout>
  );
};

export default Blogs;
