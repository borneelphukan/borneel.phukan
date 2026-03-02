import Link from "next/link";
import { useRouter } from "next/router";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BreadCrumbs = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryMapping: Record<string, string> = {
    tech: "Tech Blogs",
    //travel: "Travel Blogs",
    career: "Career Talks",
  };

  const normalizedCategory = category
    ? (category as string).toLowerCase()
    : null;

  const categoryTitle = normalizedCategory
    ? categoryMapping[normalizedCategory] || "Blogs"
    : "";

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container inline-flex items-center space-x-1 md:space-x-3 md:pl-20 pl-4">
        {/* Home Link */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold hover:text-white text-white"
          >
            Home
          </Link>
        </li>

        {/* Blogs Link */}
        {router.pathname.startsWith("/blogs") && (
          <li className="inline-flex items-center">
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            <Link
              href="/blogs"
              className="ml-1 text-sm font-semibold md:ml-2 text-white"
            >
              Blogs
            </Link>
          </li>
        )}

        {/* Render Category Link if present */}
        {normalizedCategory && (
          <li className="inline-flex items-center">
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            <Link
              href={`/blogs/${normalizedCategory}`}
              className="ml-1 text-sm font-semibold md:ml-2 text-white"
            >
              {categoryTitle}
            </Link>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
