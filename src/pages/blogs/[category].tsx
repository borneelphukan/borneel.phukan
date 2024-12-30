import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import BlogCrumbs from "@/components/common/BreadCrumb";
import BlogCard from "@/components/card/BlogCard";

type Props = {
  category: string;
  blogs: {
    author: string;
    title: string;
    date: string;
    description: string;
    slug: string;
  }[];
};

const BlogSection = ({ category, blogs = [] }: Props) => {
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
  const categories = ["tech", "career"]; // Add more categories as needed

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as { category: string };

  let folder = "";
  let display = "";

  if (category === "tech") {
    folder = "tech";
    display = "Tech";
  } else if (category === "career") {
    folder = "career";
    display = "Career";
  } else {
    console.error(`Category "${category}" is not mapped correctly.`);
    return { notFound: true };
  }

  const blogDir = path.join(process.cwd(), `public/blogs/${folder}`);
  if (!fs.existsSync(blogDir)) {
    console.warn(
      `No blogs found for category "${category}". Directory: ${blogDir}`
    );
    return { props: { category: display, blogs: [] } };
  }

  const files = fs.readdirSync(blogDir);
  const blogs = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const {
      author = "Borneel Bikash Phukan",
      title = "Title to be declared...",
      date = "Release date to be declared...",
      description = "Blog releasing soon...",
    } = matter(fileContents).data;

    return {
      author,
      title,
      date,
      description,
      slug: filename.replace(".md", ""),
    };
  });

  return { props: { category: display, blogs } };
};

export default BlogSection;
