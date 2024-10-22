import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogLayout from "@/layout/BlogLayout";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

type props = {
  coverImage: string;
  title: string;
  author: string;
  postedOn: string;
  content: string;
  category: string;
};

const BlogPost = ({
  coverImage,
  title,
  author,
  postedOn,
  content,
  category,
}: props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <BlogLayout
        coverImage={coverImage}
        title={title}
        author={author}
        postedOn={postedOn}
        content={content}
      />
    </DefaultLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["tech"];
  // const categories = ["tech", "travel", "career"];

  let paths: { params: { category: string; slug: string } }[] = [];

  // Generate paths for each markdown file in each category
  categories.forEach((category) => {
    const blogDir = path.join(process.cwd(), `public/blogs/${category}`);
    const files = fs.readdirSync(blogDir);

    const categoryPaths = files.map((file) => ({
      params: {
        category,
        slug: file.replace(".md", ""), // Remove .md extension to generate the slug
      },
    }));

    paths = [...paths, ...categoryPaths];
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category, slug } = context.params as {
    category: string;
    slug: string;
  };

  const blogDir = path.join(process.cwd(), `public/blogs/${category}`);
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents); // Extract front matter and content using gray-matter

  // Convert markdown content to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      coverImage: `/thumbnails/${slug}.jpg`, // Assuming you store images by slug name
      title: data.title,
      author: data.author,
      postedOn: data.date,
      content: contentHtml, // Pass the converted HTML content
      category,
    },
  };
};

export default BlogPost;
