import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  count?: number;
};

const BlogCategoryCard = ({ slug, title, description, count }: Props) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="group flex flex-col justify-between p-6 sm:p-8 bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out relative overflow-hidden h-full"
    >
      <div className="relative z-10 flex flex-col h-full flex-grow">
        <div className="flex-grow">
          {/* Tag */}
          {count !== undefined && (
            <div className="mb-4">
              <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-semibold tracking-wide">
                {count} {count === 1 ? "Post" : "Posts"}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#202020] leading-snug mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[#6b7280] text-base md:text-[1.1rem] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Explore Button link */}
        <div className="mt-8 flex items-center text-blue-600 font-semibold transition-transform duration-300">
          <span>Explore Blogs</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCategoryCard;
