import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import BlogCrumbs from "@/components/common/BreadCrumb";
import BlogCard from "@/components/card/BlogCard";
import Image from "next/image";

type props = {
  category: string;
  blogs: {
    author: string;
    title: string;
    date: string;
    description: string;
    slug: string;
  }[];
};

const BlogSection = ({ category, blogs = [] }: props) => {
  if (blogs.length === 0) {
    return (
      <DefaultLayout>
        <BlogBanner>
          <BlogCrumbs />
        </BlogBanner>
        <div className="container mx-auto text-center p-32">
          <div className="flex justify-center m-5">
            <Image
              src={"/assets/icons/nothing.webp"}
              alt="Blog Image"
              width={800}
              height={800}
              className="w-32 h-32"
            />
          </div>
          <p className="font-semibold text-base">
            No blogs available for this category at the moment.
          </p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <BlogBanner>
        <BlogCrumbs />
      </BlogBanner>

      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          link={`/blogs/${category.toLowerCase()}/${blog.slug}`}
          imageUrl={`/thumbnails/${blog.slug}.jpg`}
          author={blog.author}
          date={blog.date}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </DefaultLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["tech"];
  // const categories = ["tech", "travel", "career"];

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as { category: string };

  const categoryMapping: Record<string, { folder: string; display: string }> = {
    tech: { folder: "tech", display: "Tech" },
    //travel: { folder: "travel", display: "Travel" },
    career: { folder: "career", display: "Career" },
  };

  const categoryInfo = categoryMapping[category];

  if (!categoryInfo) {
    console.error(`Category "${category}" is not mapped correctly.`);
    return {
      notFound: true,
    };
  }

  const blogDir = path.join(
    process.cwd(),
    `public/blogs/${categoryInfo.folder}`
  );

  if (!fs.existsSync(blogDir)) {
    console.warn(
      `Directory for category "${category}" does not exist: ${blogDir}`
    );
    return {
      props: {
        category: categoryInfo.display,
        blogs: [],
      },
    };
  }

  let blogs: {
    title: string;
    author: string;
    slug: string;
    date: string;
    description: string;
  }[] = [];

  const files = fs.readdirSync(blogDir);

  if (files.length > 0) {
    blogs = files.map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents);

      return {
        author: data.author || "Borneel Bikash Phukan",
        title: data.title || "Title to be declared...",
        date: data.date || "Release date to be declared...",
        description: data.description || "Blog releasing soon...",
        slug: filename.replace(".md", ""),
      };
    });
  } else {
    console.warn(`Directory "${blogDir}" is empty.`);
  }

  return {
    props: {
      category: categoryInfo.display,
      blogs: blogs || [],
    },
  };
};

export default BlogSection;
