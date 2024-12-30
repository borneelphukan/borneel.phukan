import BreadCrumbs from "@/components/common/BreadCrumb";
import VideoPlayer from "@/components/utils/VideoPlayer";

type Props = {
  coverImage: string;
  title: string;
  author: string;
  date: string;
  link: string;
  content: string;
  videoId?: string; // Add the optional videoId prop
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
    <div className="min-h-screen relative z-0">
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

          {/* Centering the BreadCrumbs component */}
          <div className="flex justify-center mt-5">
            <BreadCrumbs />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto z-0 sm:px-20 md:px-20">
        {/* Blog Texts */}
        <div className="py-10">
          {/* Author and Date */}
          <div className="mb-4">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold px-10">
              {author}
            </h4>
            <p className="text-gray-500 text-sm sm:text-base px-10">
              Posted on {date}
            </p>
            {link ? (
              <a
                href={link}
                className="text-blue-500 text-sm sm:text-base px-10"
              >
                View Original Post
              </a>
            ) : (
              ""
            )}
          </div>

          {/* Video Player */}
          {videoId && (
            <div className="py-2">
              <VideoPlayer videoId={videoId} />
            </div>
          )}

          {/* Blog Content */}
          <div
            className="container mx-auto px-10 text-base sm:text-base md:text-base lg:text-base text-justify space-y-6"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
