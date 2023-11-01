"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLinkClick = (linkText) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home"); // Set the initial selected link here if needed.
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
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

        {/*Services*/}
        <a
          id="strike"
          href="/Services"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Services" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Services")}
        >
          Services
        </a>

        {/*Blogs*/}
        <a
          id="strike"
          href="/Blogs"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Blogs" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Blogs")}
        >
          Blogs
        </a>

        {/*Gallery*/}
        {/* Add the link to Gallery here under href*/}
        <a
          id="strike"
          href="/Gallery"
          className={`text-white hover:text-gray-300 ${
            selectedLink === "Gallery" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Gallery")}
        >
          Gallery
        </a>

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

          {/* Portfolio */}
          <div className="relative">
            <a
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
            </a>
          </div>

          {/* Services */}
          <div className="relative">
            <a
              href="/Services"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Services" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Services");
              }}
            >
              Services
            </a>
          </div>

          {/* Blogs */}
          <div className="relative">
            <a
              href="/Blogs"
              className={`text-white hover:text-blue-400 ${
                selectedLink === "Blogs" ? "selected" : ""
              }`}
              onClick={() => {
                handleLinkClick("Blogs");
                toggleMobileMenu();
              }}
            >
              Blogs
            </a>
          </div>

          {/* Gallery */}
          <div className="relative">
            <a
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
            </a>
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
