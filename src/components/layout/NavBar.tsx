import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBlogNav, setShowBlogNav] = useState<boolean>(false);
  const [showMobileBlogNav, setMobileBlogNav] = useState<boolean>(false);
  const { t } = useTranslation();
  const navItems: string[] = t("navItems", {
    returnObjects: true,
  }) as string[];

  const handleLinkClick = (linkText: string) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home"); // Set the initial selected link here if needed.
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  const toggleBlogNav = () => {
    setMobileBlogNav(!showMobileBlogNav);
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-gray-950 py-1 px-6 flex flex-col">
      <div className="flex items-center mb-4 pt-2">
        <div className="flex items-center pt-2">
          <Image
            src="/navbar-logo.svg"
            alt="Company Logo"
            width={50}
            height={50}
            className="h-10 w-auto ml-[5%]"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center space-x-8 my-4">
        <Link
          id="strike"
          href="/"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          {navItems[0]}
        </Link>

        {/* Portfolio */}
        <Link
          id="strike"
          href="/Portfolio"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Portfolios" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          {navItems[1]}
        </Link>

        {/* Services */}
        <Link
          id="strike"
          href="/Services"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Services" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Services")}
        >
          {navItems[2]}
        </Link>

        {/* Blogs */}
        <div
          className="relative"
          onMouseEnter={() => setShowBlogNav(true)}
          onMouseLeave={() => setShowBlogNav(false)}
        >
          <Link
            id="strike"
            href="/Blogs"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Blogs" ? "selected" : ""
            }`}
            onClick={() => handleLinkClick("Blogs")}
          >
            {navItems[3]}
          </Link>
          {showBlogNav && (
            <ul
              className="absolute left-0 mt-1 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setShowBlogNav(true)}
              onMouseLeave={() => setShowBlogNav(false)}
              style={{ top: "80%" }}
            >
              <li className="py-2">
                <Link
                  className="text-black hover:text-blue-400"
                  href="/Blogs/Developer"
                >
                  Developer Blogs
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Gallery */}
        <Link
          id="strike"
          href="/Gallery"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Gallery" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Gallery")}
        >
          {navItems[4]}
        </Link>

        <div className="flex justify-center">
          <Link
            id="strike"
            href="/Contact"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Contact" ? "selected" : ""
            }`}
            onClick={() => handleLinkClick("Contact")}
          >
            {navItems[5]}
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden flex flex-col items-center justify-center mt-1 space-y-2 transition-max-height duration-1000 ease-in-out overflow-hidden ${
          showMobileMenu ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <Link
          href="/"
          className={`text-white hover:text-gray-300 text-center ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => {
            handleLinkClick("Home");
            toggleMobileMenu();
          }}
        >
          {navItems[0]}
        </Link>

        {/* Portfolio */}
        <div className="relative">
          <Link
            href="/Portfolio"
            className={`text-white hover:text-blue-400 text-center ${
              selectedLink === "Portfolio" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Portfolio");
              toggleMobileMenu();
            }}
          >
            {navItems[1]}
          </Link>
        </div>

        {/* Services */}
        <div className="relative">
          <Link
            href="/Services"
            className={`text-white hover:text-blue-400 text-center ${
              selectedLink === "Services" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Services");
            }}
          >
            {navItems[2]}
          </Link>
        </div>

        {/* Blogs */}
        <div className="relative">
          <Link
            href="#"
            className={`text-white hover:text-blue-400 text-center ${
              selectedLink === "Blogs" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Blogs");
              toggleBlogNav();
            }}
          >
            {navItems[3]}
          </Link>
          {showMobileBlogNav && (
            <ul className="relative left-0 mt-2 text-sm px-5 bg-black w-full">
              <li className="py-2">
                <Link
                  href="Blogs/Developer"
                  className="text-white hover:text-blue-400 text-center"
                >
                  Developer Blogs
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Gallery */}
        <div className="relative">
          <Link
            href="/Gallery"
            className={`text-white hover:text-blue-400 text-center ${
              selectedLink === "Gallery" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Gallery");
              toggleMobileMenu();
            }}
          >
            {navItems[4]}
          </Link>
        </div>

        <div className="relative">
          <Link
            href="/Contact"
            className={`text-white ${
              selectedLink === "Contact" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Contact");
              toggleMobileMenu();
            }}
          >
            {navItems[5]}
          </Link>
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center justify-end m-1">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-blue-400 focus:outline-none pb-2"
          aria-label="Open Mobile Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 5h22v2H1V5zm0 7h22v2H1v-2zm0 7h22v2H1v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Style for the underline */}
      <style jsx>
        {`
          .selected::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #60a5fa;
            margin-top: 10px;
          }
          #strike:hover::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: #60a5fa;
            margin-top: 10px;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
