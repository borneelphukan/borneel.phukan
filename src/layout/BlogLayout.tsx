import React, { FC } from "react";
import Head from "next/head";
type BlogLayoutProps = {
  coverImage: string;
  title: string;
  author: string;
  postedOn: string;
  content: string;
};

const BlogLayout: FC<BlogLayoutProps> = ({
  coverImage,
  title,
  author,
  postedOn,
  content,
}) => {
  return (
    <div className="min-h-screen relative z-0">
      <Head>
        <title>Blogs | Borneel Bikash Phukan</title>
      </Head>
      {/* Cover Image with Title */}
      <div
        className="blog-cover flex items-center justify-center relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(43, 35, 41, 0.8), rgba(82, 59, 30, 0.8)),
            url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
          overflow: "hidden",
        }}
      >
        {/* Title and TechCrumbs Container */}
        <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-2xl mx-auto text-white">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto z-0 px-4 sm:px-6 md:px-8">
        {/* Blog Texts */}
        <div className="py-10">
          {/* Author and Date */}
          <div className="mb-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {author}
            </h4>
            <p className="text-gray-500 text-sm sm:text-base">
              Posted on {postedOn}
            </p>
          </div>

          {/* Blog Content */}
          <div
            className="prose max-w-none text-base sm:text-lg md:text-lg lg:text-2xl text-justify"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
