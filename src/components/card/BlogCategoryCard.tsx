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
      className="group block bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out hover:-translate-y-1 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-4">
            {description}
          </p>
        </div>

        {count !== undefined && (
          <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              {count} {count === 1 ? "Post" : "Posts"}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCategoryCard;
