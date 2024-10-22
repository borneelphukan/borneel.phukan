import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogBanner from "@/components/Blog/BlogBanner";
import BlogCrumbs from "@/components/BreadCrumb";
import BlogCard from "@/components/card/BlogCard"; // Import your BlogCard component

type props = {
  category: string;
  blogs: { author: string; title: string; date: string; description: string; slug: string }[];
};

const BlogCategoryPage = ({ category, blogs = [] }: props) => {
  if (blogs.length === 0) {
    return (
      <div>
        <h1>{category} Blogs</h1>
        <p>No blogs available for this category.</p>
      </div>
    );
  }

  return (
    <DefaultLayout>
      <BlogBanner>
        <BlogCrumbs />
      </BlogBanner>

      {/* Replace the <ul> with dynamic BlogCard components */}
      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          link={`/blogs/${category}/${blog.slug}`} // Dynamically generate the blog link
          imageUrl={`/thumbnails/${blog.slug}.jpg`} // Assuming your image is stored by slug
          author={blog.author}
          date={blog.date} // Replace with actual date if available
          title={blog.title} // Title from the blog's metadata
          description={blog.description}
        />
      ))}
    </DefaultLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["tech", "travel", "career"];

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as { category: string };

  const categoryMapping: Record<string, { folder: string; display: string }> = {
    tech: { folder: "tech", display: "Tech" },
    travel: { folder: "travel", display: "Travel" },
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
    console.error(`Directory for category "${category}" not found: ${blogDir}`);
    return {
      notFound: true,
    };
  }

  let blogs: { title: string; author: string; slug: string }[] = [];

  const files = fs.readdirSync(blogDir);

  if (files.length > 0) {
    blogs = files.map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents);

      return {
        author: data.author || "Unknown Author",
        title: data.title || filename.replace(".md", ""),
        date: data.date || "Unknown Date",
        description: data.description || "No description",
        slug: filename.replace(".md", ""),
      };
    });
  }

  return {
    props: {
      category: categoryInfo.display,
      blogs: blogs || [],
    },
  };
};

export default BlogCategoryPage;
