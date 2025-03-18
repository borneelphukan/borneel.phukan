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
      className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
    >
      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        {count !== undefined && (
          <div className="mt-auto pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              {count} {count === 1 ? "post" : "posts"}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCategoryCard;
