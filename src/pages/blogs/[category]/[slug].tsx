import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import DefaultLayout from "@/layout/DefaultLayout";
import BlogLayout from "@/layout/BlogLayout";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { getR2Url } from "@/config/r2";

type Props = {
  coverImage: string;
  title: string;
  author: string;
  date: string;
  link: string;
  content: string;
  category: string;
  videoId?: string;
};

const BlogPost = ({
  coverImage,
  title,
  author,
  date,
  link,
  content,
  videoId,
}: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <DefaultLayout>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400 text-sm font-medium">Loading article…</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

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
      coverImage: getR2Url(`thumbnails/${slug}.jpg`),
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
