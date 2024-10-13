import React from "react";
import Link from "next/link";

const HomeCrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="container inline-flex items-center space-x-1 md:space-x-3 md:pl-20 pl-4">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-normal hover:text-white dark:text-gray-400 dark:hover:text-orange"
          >
            Home
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default HomeCrumb;
