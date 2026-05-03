import Image from "next/image";
import BreadCrumbs from "@/components/breadcrumb";
import VideoPlayer from "@/components/utils/VideoPlayer";
import { Icon } from "@/components/icon";

type Props = {
  coverImage: string;
  title: string;
  author: string;
  date: string;
  link: string;
  content: string;
  videoId?: string;
};

const BlogLayout = ({
  coverImage,
  title,
  author,
  date,
  link,
  content,
  videoId,
}: Props) => {
  return (
    <article className="min-h-screen bg-white pb-24 sm:pb-36">
      {/* ─── Hero Cover Section ─── */}
      <div className="relative min-h-[350px] sm:min-h-[380px] md:h-[48vh] w-full overflow-hidden flex items-center justify-center p-4">
        {/* Background Cover Image */}
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          unoptimized={true}
          className="absolute inset-0 object-cover"
        />

        {/* Solid dark base overlay + multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/25 via-transparent to-purple-900/25 z-0" />

        {/* Hero Header Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 w-full">
          {/* Breadcrumbs */}
          <div className="mb-4 sm:mb-5 flex justify-center max-w-full overflow-hidden">
            <BreadCrumbs />
          </div>

          {/* Dynamic Category/Tag Accent Line */}
          <div className="w-12 h-1 rounded-full bg-blue-500 mb-4 sm:mb-6 shadow-sm" />

          {/* Blog Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4 drop-shadow-md max-w-3xl">
            {title}
          </h1>

          {/* Author and Publish Metadata */}
          <div className="flex items-center justify-center flex-wrap gap-x-12 sm:gap-x-16 gap-y-2 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-light text-gray-200">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              {author}
            </span>
            <span className="hidden sm:inline text-gray-500">·</span>
            <time className="text-gray-300"> {date}</time>
          </div>
        </div>
      </div>

      {/* ─── Article Body & Content Section ─── */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 mb-12 sm:mb-20">
        <div className="relative z-20 overflow-hidden p-5 sm:p-10 md:p-14 lg:p-16">
          {/* External Original Link CTA if present */}
          {link && (
            <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200"
              >
                <span>Read Original</span>
                <Icon type="OpenInNew" size="sm" />
              </a>
            </div>
          )}

          {/* YouTube Video Player Embed if present */}
          {videoId && (
            <div className="mb-8 sm:mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <VideoPlayer videoId={videoId} />
            </div>
          )}

          {/* Rendered HTML Prose Content */}
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </article>
  );
};

export default BlogLayout;
