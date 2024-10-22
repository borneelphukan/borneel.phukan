import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumbs = () => {
  const router = useRouter();
  const { category } = router.query; // Extract the category from the URL

  // Mapping category slug to display title
  const categoryMapping: Record<string, string> = {
    tech: "Tech Blogs",
    travel: "Travel Blogs",
    career: "Career Talks",
  };

  // Ensure category is always lowercased to avoid case sensitivity issues
  const normalizedCategory = category
    ? (category as string).toLowerCase()
    : null;

  // Get the title for the current category based on normalized category
  const categoryTitle = normalizedCategory
    ? categoryMapping[normalizedCategory] || "Blogs"
    : "";

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container inline-flex items-center space-x-1 md:space-x-3 md:pl-20 pl-4">
        {/* Home Link */}
        <li className="inline-flex items-center">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-bold hover:text-white text-white dark:hover:text-orange"
          >
            Home
          </Link>
        </li>

        {/* Blogs Link */}
        {router.pathname.startsWith("/blogs") && (
          <li className="inline-flex items-center">
            <svg
              className="w-3 h-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              href="/blogs"
              className="ml-1 text-sm font-bold md:ml-2 text-white"
            >
              Blogs
            </Link>
          </li>
        )}

        {/* Render Category Link if present */}
        {normalizedCategory && (
          <li className="inline-flex items-center">
            <svg
              className="w-3 h-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <Link
              href={`/blogs/${normalizedCategory}`}
              className="ml-1 text-sm font-bold md:ml-2 text-white"
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
