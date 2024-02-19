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
        link="https://dev.to/borneelphukan/4-commonly-used-software-architectures-that-you-should-be-aware-of-as-a-software-developer-57i"
        imageUrl="/thumbnails/architecture.jpg"
        author="Borneel Bikash Phukan"
        title="4 Commonly used Software Architectures that you should be aware of as a Software Developer"
        description="Uncover the essentials of software architectures in this blog post! As a developer, learn about four key architectures – Monolithic, Service-Oriented, Microservices, and Client-Server. Break down their pros, cons, and ideal scenarios, helping you make informed decisions for your projects. Whether it's a small app or a big IT system, this straightforward analysis will guide you in selecting the perfect architecture for success in software development."
      />
    </DefaultLayout>
  );
};

export default Blogs;
