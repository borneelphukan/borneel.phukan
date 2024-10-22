import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import BlogLayout from "@/layout/BlogLayout";
import DefaultLayout from "@/layout/DefaultLayout";

// Define the path to the blog directory
const blogsDirectory = path.join(process.cwd(), "public/blogs/developer");

type BlogPostProps = {
  coverImage: string;
  title: string;
  author: string;
  postedOn: string;
  content: string;
};

const BlogPost = ({
  coverImage,
  title,
  author,
  postedOn,
  content,
}: BlogPostProps) => {
  const router = useRouter();

  // If the page is not yet generated, show a fallback loading state
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

export default BlogPost;

// Generates static paths for each blog post
export const getStaticPaths: GetStaticPaths = async () => {
  // Get all files from the blogs directory
  const filenames = fs.readdirSync(blogsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      postId: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

// Fetch the blog post content for each page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params?.postId as string;
  const filePath = path.join(blogsDirectory, `${postId}.md`);

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Convert the Markdown content to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      coverImage: data.coverImage,
      title: data.title,
      author: data.author,
      postedOn: data.postedOn,
      content: contentHtml,
    },
  };
};
