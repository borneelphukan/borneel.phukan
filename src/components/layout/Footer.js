// components/Footer.js
import React from "react";
import contactData from "@/data/contact-data.json";
import Link from "next/link";
import Image from "next/image";
import textualData from "@/data/textual-data.json";

const Footer = () => {
  return (
    <footer className="relative  bg-gray-950 text-white text-center py-8 flex flex-col items-center justify-center bottom-0 inset-x-0 px-10">
      <div className="h-3/4 w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 flex-grow">
        {/* Column 1 */}
        <div className="mb-8 md:mb-0 ">
          <h2 className="text-left text-3xl  font-semibold mb-4">
            <Image
              src="/navbar-logo.svg"
              alt="Company Logo"
              width={50}
              height={50}
              className="h-10 w-auto"
            />
          </h2>
          {/* Your content for column 1 */}
          <p className="text-sm text-left text-slate-300 leading-6">
            {textualData.footerText}
          </p>
          <h1 className="text-left text-xl font-semibold py-2">Contact Info</h1>
          <p className="text-left text-sm">
            Email:{" "}
            <span className="text-sm text-slate-300">{contactData.email} </span>
          </p>
          <p className="text-sm text-left my-1">
            Address:{" "}
            <span className="text-sm text-slate-300">
              {contactData.address}{" "}
            </span>
          </p>
          <p className="text-sm text-left my-1">
            Phone:{" "}
            <span className="text-sm text-slate-300">{contactData.fax} </span>
          </p>
        </div>

        {/* Column 2 */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
          {/* Your content for column 2 */}
          <ul className="text-left px-24">
            <li className="py-2">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="#"
              >
                Documentation
              </Link>
            </li>

            <li className="py-1">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-1">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="#"
              >
                Pricing
              </Link>
            </li>
            <li className="py-1">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/ContactUs"
                >
                  Contact Me
                </Link>
              </li>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          {/* Your content for column 3 */}
          <ul className="text-left px-24">
            <li className="py-1">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="/AboutUs"
              >
                About Us
              </Link>
            </li>
            <li className="py-1">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="#"
              >
                Career
              </Link>
            </li>
            <li className="py-1">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="#"
              >
                Projects
              </Link>
            </li>
            <li className="py-1">
              <Link
                className="text-sm text-slate-300 hover:text-blue-400"
                href="#"
              >
                My Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Location</h2>
          {/* Your content for column 4 */}
        </div>
      </div>

      {/* All Rights Reserved tagline */}
      <p className="mt-8 text-sm text-slate-400">
        Borneel Bikash Phukan &copy; {new Date().getFullYear()} All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
