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
      <ol className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
        {/* Home Link */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        {/* Blogs Link */}
        {router.pathname.startsWith("/blogs") && (
          <li className="inline-flex items-center">
            <ChevronRightIcon className="w-4 h-4 text-white/30" />
            <Link
              href="/blogs"
              className="ml-1 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
        )}

        {/* Render Category Link if present */}
        {normalizedCategory && (
          <li className="inline-flex items-center">
            <ChevronRightIcon className="w-4 h-4 text-white/30" />
            <Link
              href={`/blogs/${normalizedCategory}`}
              className="ml-1 text-sm font-medium text-white transition-colors duration-200"
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
