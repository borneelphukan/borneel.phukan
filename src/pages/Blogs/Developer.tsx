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
        date="5th January, 2024"
        title="4 Commonly used Software Architectures that you should be aware of as a Software Developer"
        description="Uncover the essentials of software architectures in this blog post! As a developer, learn about four key architectures – Monolithic, Service-Oriented, Microservices, and Client-Server. Break down their pros, cons, and ideal scenarios, helping you make informed decisions for your projects. Whether it's a small app or a big IT system, this straightforward analysis will guide you in selecting the perfect architecture for success in software development."
      />
      <BlogCard
        link="https://dev.to/borneelphukan/9-react-hooks-that-you-should-be-aware-of-as-a-frontend-developer-4c2m"
        imageUrl="/thumbnails/hooks.jpeg"
        author="Borneel Bikash Phukan"
        date="1st April, 2024"
        title="9 React Hooks that you should be aware of as a Frontend Developer"
        description="In React's ever-evolving landscape, mastering hooks is essential for frontend developers. From useState for state management to useId for unique IDs, this post explores ten crucial React hooks. With streamlined development, enhanced code readability, and optimized user experiences, these hooks unlock React's full potential. Whether you're new to React or a seasoned pro, mastering these tools is key for success in modern web development."
      />
    </DefaultLayout>
  );
};

export default Blogs;
