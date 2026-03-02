import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBlogNav, setShowBlogNav] = useState<boolean>(false);
  const [showMobileBlogNav, setMobileBlogNav] = useState<boolean>(false);
  const navItems = [
    "Home",
    "Portfolio",
    "Services",
    "Blogs",
    "Gallery",
    "Contact",
  ];

  const handleLinkClick = (linkText: string) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home");
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
          href="/"
          className={`text-white hover:text-gray-300 hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:bg-blue-400 hover:after:w-full hover:after:mt-[10px] ${
            selectedLink === "Home" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          {navItems[0]}
        </Link>

        {/* Portfolio */}
        <Link
          href="/Portfolio"
          className={`text-white hover:text-gray-300 hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:bg-blue-400 hover:after:w-full hover:after:mt-[10px] ${
            selectedLink === "Portfolios" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
          }`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          {navItems[1]}
        </Link>

        {/* Services */}
        <Link
          href="/Services"
          className={`text-white hover:text-gray-300 hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:bg-blue-400 hover:after:w-full hover:after:mt-[10px] ${
            selectedLink === "Services" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
            href="/blogs"
            className={`text-white hover:text-gray-300 hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:bg-blue-400 hover:after:w-full hover:after:mt-[10px] ${
              selectedLink === "Blogs" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
            }`}
            onClick={() => handleLinkClick("Blogs")}
          >
            {navItems[3]}
          </Link>
        </div>

        {/* Gallery */}
        <Link
          href="/Gallery"
          className={`text-white hover:text-gray-300 hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:bg-blue-400 hover:after:w-full hover:after:mt-[10px] ${
            selectedLink === "Gallery" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
          }`}
          onClick={() => handleLinkClick("Gallery")}
        >
          {navItems[4]}
        </Link>

        {/* Contact */}
        <div className="flex justify-center">
          <Link
            href="/Contact"
            className={`text-white hover:text-gray-300 hover:after:content-[''] hover:after:block hover:after:h-[2px] hover:after:bg-blue-400 hover:after:w-full hover:after:mt-[10px] ${
              selectedLink === "Contact" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
            selectedLink === "Home" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
              selectedLink === "Portfolio" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
              selectedLink === "Services" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
            href="/blogs"
            className={`text-white hover:text-blue-400 text-center ${
              selectedLink === "Blogs" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
            }`}
            onClick={() => {
              handleLinkClick("Blogs");
              toggleBlogNav();
            }}
          >
            {navItems[3]}
          </Link>
          {showMobileBlogNav && (
            <ul className="relative left-0 mt-2 text-sm px-5  w-full">
              <li className="py-2">
                <Link
                  href="/blogs/tech"
                  className="text-white hover:text-blue-400 text-center"
                >
                  Tech Blogs
                </Link>
              </li>
              {/* <li className="py-2">
                <Link
                  href="/blogs/travel"
                  className="text-white hover:text-blue-400 text-center"
                >
                  Travel Blogs
                </Link>
              </li> */}
              <li className="py-2">
                <Link
                  href="/blogs/career"
                  className="text-white hover:text-blue-400 text-center"
                >
                  Career Talks
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
              selectedLink === "Gallery" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
              selectedLink === "Contact" ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-blue-400 after:mt-[10px]" : ""
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
          {showMobileMenu ? (
            <CloseIcon className="h-6 w-6 fill-current" />
          ) : (
            <MenuIcon className="h-6 w-6 fill-current" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
