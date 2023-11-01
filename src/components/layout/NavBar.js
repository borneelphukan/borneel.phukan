"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showPagesSubNav, setShowPagesSubNav] = useState(false);
  const [showMobilePagesSubNav, setMobileShowPagesSubNav] = useState(false);
  const [showNewsSubNav, setNewsSubNav] = useState(false);
  const [showMobileNewsSubNav, setMobileNewsSubNav] = useState(false);

  const handleLinkClick = (linkText) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home"); // Set the initial selected link here if needed.
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  const toggleSubNavPages = () => {
    setMobileShowPagesSubNav(!showMobilePagesSubNav);
  };

  const toggleSubNavNews = () => {
    setMobileNewsSubNav(!showMobileNewsSubNav);
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-gray-950 py-1 px-6 flex flex-col">
      {/* Company Logo */}
      <div className="flex items-center mb-4 pl-10 pt-2">
        {/* Company Logo */}
        <div className="flex items-center pl-10 pt-2">
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

        {/*Pages*/}
        <div
          className="relative"
          onMouseEnter={() => setShowPagesSubNav(true)}
          onMouseLeave={() => setShowPagesSubNav(false)}
        >
          <a
            id="strike"
            href="#"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "Pages" ? "selected" : ""
            }`}
            onClick={() => handleLinkClick("Pages")}
          >
            Pages
          </a>
          {showPagesSubNav && (
            <ul
              className="absolute left-0 mt-1 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setShowPagesSubNav(true)} // Keep the dropdown open when the user hovers over the dropdown list
              onMouseLeave={() => setShowPagesSubNav(false)} // Close the dropdown when the user stops hovering over both the link and the dropdown list
              style={{ top: "80%" }}
            >
              {/* Sub-navigation: Pages */}
              <li className="py-2">
                <Link
                  className="text-black hover:text-blue-400"
                  href="/AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-blue-400"
                  href="/ContactUs"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-blue-400"
                  href="/Services"
                >
                  Services
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-blue-400"
                  href="/Testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li className="py-2">
                <Link
                  className="text-black hover:text-blue-400"
                  href="Error404"
                >
                  Error 404
                </Link>
              </li>
              {/* Add more sub-navigation items if needed */}
            </ul>
          )}
        </div>

        {/*Portfolio*/}
        {/* Add the link to Portfolio here under href*/}
        <a
          id="strike"
          href="/Portfolio"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Portfolios" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          Portfolio
        </a>

        {/*Our Team*/}
        <Link
          id="strike"
          href="/OurTeam"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Our-Team" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Our-Team")}
        >
          Our Team
        </Link>

        {/*News*/}
        <div
          className="relative"
          onMouseEnter={() => setNewsSubNav(true)}
          onMouseLeave={() => setNewsSubNav(false)}
        >
          <a
            id="strike"
            href="#"
            className={`text-white hover:text-gray-300 ${
              selectedLink === "News" ? "selected" : ""
            }`}
            onClick={() => handleLinkClick("News")}
          >
            News
          </a>
          {showNewsSubNav && (
            <ul
              className="absolute left-0 mt-2 text-sm px-5 bg-slate-100 border rounded border-white w-52"
              onMouseEnter={() => setNewsSubNav(true)} // Keep the dropdown open when the user hovers over the dropdown list
              onMouseLeave={() => setNewsSubNav(false)} // Close the dropdown when the user stops hovering over both the link and the dropdown list
              style={{ top: "80%" }}
            >
              {/* Sub-navigation link: News*/}
              <li className="py-2">
                <a href="#" className="text-black hover:text-blue-400">
                  Classic
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-blue-400">
                  Grid
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-blue-400">
                  Masonary
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-blue-400">
                  Timeline
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-black hover:text-blue-400">
                  Single Post
                </a>
              </li>
              {/* Add more sub-navigation items if needed */}
            </ul>
          )}
        </div>

        {/*Contact Us Button*/}
        <div className="flex justify-center lg:mt-0">
          <a
            href="#contact-us"
            className="bg-blue-400 text-white hover:bg-blue-800 ml-5 mb-3 p-2 rounded"
          >
            Contact Us
          </a>
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

          {/* Pages - Add a sub-navigation dropdown */}
          <div className="relative">
            <a
              href="#"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Pages" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleSubNavPages();
              }}
            >
              Pages
            </a>

            {showMobilePagesSubNav && (
              <ul className="relative left-0 mt-2 text-sm px-5 bg-black w-full">
                {/* Sub-navigation: Pages */}
                <li className="py-2">
                  <Link
                    href="/AboutUs"
                    className="text-white hover:text-blue-400"
                  >
                    About Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/ContactUs"
                    className="text-white hover:text-blue-400"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/Services"
                    className="text-white hover:text-blue-400"
                  >
                    Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/Testimonials"
                    className="text-white hover:text-blue-400"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="py-2">
                  <a href="Error404" className="text-white hover:text-blue-400">
                    Error 404
                  </a>
                </li>
                {/* Add more sub-navigation items if needed */}
              </ul>
            )}
          </div>

          {/* Portfolio - Add a sub-navigation dropdown */}
          <div className="relative">
            <a
              href="#"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Pages" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleMobileMenu();
              }}
            >
              Portfolio
            </a>
          </div>

          {/* News - Add a sub-navigation dropdown */}
          <div className="relative">
            <a
              href="#"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Pages" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Pages");
                toggleSubNavNews();
              }}
            >
              News
            </a>
            {showMobileNewsSubNav && (
              <ul className="relative left-0 mt-2 text-sm px-5 bg-black w-full">
                {/* Sub-navigation: Pages */}
                <li className="py-2">
                  <Link
                    href="/Classic"
                    className="text-white hover:text-blue-400"
                  >
                    Classic
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/Grid" className="text-white hover:text-blue-400">
                    Grid
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/Masonary"
                    className="text-white hover:text-blue-400"
                  >
                    Masonary
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/Timeline"
                    className="text-white hover:text-blue-400"
                  >
                    Timeline
                  </Link>
                </li>
                <li className="py-2">
                  <a
                    href="/SinglePost"
                    className="text-white hover:text-blue-400"
                  >
                    Single
                  </a>
                </li>
                {/* Add more sub-navigation items if needed */}
              </ul>
            )}
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
