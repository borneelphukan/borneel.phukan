import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBlogNav, setShowBlogNav] = useState<boolean>(false);
  const [showMobileBlogNav, setMobileBlogNav] = useState<boolean>(false);

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
      {/* Company Logo */}
      <div className="flex items-center mb-4 pt-2">
        {/* Company Logo */}
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
      <div className="hidden lg:flex justify-center space-x-8 mt-4">
        <Link
          id="strike"
          href="/"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>

        {/*Portfolio*/}
        <Link
          id="strike"
          href="/Portfolio"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Portfolios" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          Portfolio
        </Link>

        {/*Services*/}
        <Link
          id="strike"
          href="/Services"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Services" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Services")}
        >
          Services
        </Link>

        {/*Blogs*/}
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
            Blogs
          </Link>
          {showBlogNav && (
            <ul
              className="absolute left-0 mt-1 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setShowBlogNav(true)} // Keep the dropdown open when the user hovers over the dropdown list
              onMouseLeave={() => setShowBlogNav(false)} // Close the dropdown when the user stops hovering over both the link and the dropdown list
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

        {/*Gallery*/}
        {/* Add the link to Gallery here under href*/}
        <Link
          id="strike"
          href="/Gallery"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Gallery" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Gallery")}
        >
          Gallery
        </Link>

        {/*Contact Us Button*/}
        <div className="flex justify-center lg:mt-0">
          <Link
            href="/ContactUs"
            className="bg-blue-400 text-white hover:bg-blue-800 ml-5 mb-3 p-2 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {showMobileMenu && (
        <div className="lg:hidden flex flex-col mt-1 space-y-2">
          <Link
            href="/"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Home" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Home");
              toggleMobileMenu();
            }}
          >
            Home
          </Link>

          {/* Portfolio */}
          <div className="relative">
            <Link
              href="/Portfolio"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Portfolio" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Portfolio");
                toggleMobileMenu();
              }}
            >
              Portfolio
            </Link>
          </div>

          {/* Services */}
          <div className="relative">
            <Link
              href="/Services"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Services" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Services");
              }}
            >
              Services
            </Link>
          </div>

          {/* Blogs */}
          <div className="relative">
            <Link
              href="#"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Blogs" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Blogs");
                toggleBlogNav();
              }}
            >
              Blogs
            </Link>
            {showMobileBlogNav && (
              <ul className="relative left-0 mt-2 text-sm px-5 bg-black w-full">
                <li className="py-2">
                  <Link
                    href="Blogs/Developer"
                    className="text-white hover:text-blue-400"
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
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Gallery" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Gallery");
                toggleMobileMenu();
              }}
            >
              Gallery
            </Link>
          </div>

          <div className="relative mx-auto bg-blue-400 rounded px-3 py-2 hover:bg-blue-600 ">
            <Link
              href="/ContactUs"
              className={`text-white ${
                selectedLink === "ContactUs" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("ContactUs");
                toggleMobileMenu();
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

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
