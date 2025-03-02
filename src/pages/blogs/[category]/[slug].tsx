import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogLayout from "@/layout/BlogLayout";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

type Props = {
  coverImage: string;
  title: string;
  author: string;
  date: string;
  link: string;
  content: string;
  category: string;
  videoId?: string; // Add the optional videoId prop
};

const BlogPost = ({
  coverImage,
  title,
  author,
  date,
  link,
  content,
  videoId, // Destructure videoId
}: Props) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <DefaultLayout>
      <BlogLayout
        coverImage={coverImage}
        title={title}
        author={author}
        date={date}
        link={link}
        content={content}
        videoId={videoId}
      />
    </DefaultLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["tech", "career"]; // Add more categories as needed

  let paths: { params: { category: string; slug: string } }[] = [];
  categories.forEach((category) => {
    const blogDir = path.join(process.cwd(), `public/blogs/${category}`);
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir);
      paths = paths.concat(
        files.map((file) => ({
          params: { category, slug: file.replace(".md", "") },
        }))
      );
    }
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
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      coverImage: `/thumbnails/${slug}.jpg`,
      title: data.title,
      author: data.author,
      date: data.date,
      link: data.link,
      content: contentHtml,
      category,
      videoId: data.videoId || null,
    },
  };
};

export default BlogPost;
