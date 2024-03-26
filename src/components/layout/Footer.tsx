import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 text-white text-center py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
          {/* Column 1 */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-left text-3xl font-semibold mb-4">
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
              {t('welcome')}
            </p>
            
            
          </div>

          {/* Column 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
            {/* Your content for column 2 */}
            <ul className="text-left px-24">
              <li className="py-2">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Services"
                >
                  Experiences
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="#"
                >
                  Education
                </Link>
              </li>    
                <li className="py-1">
                  <Link
                    className="text-sm text-slate-300 hover:text-blue-400"
                    href="/ContactUs"
                  >
                    Skills
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-sm text-slate-300 hover:text-blue-400"
                    href="/ContactUs"
                  >
                    Publication
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="text-sm text-slate-300 hover:text-blue-400"
                    href="/ContactUs"
                  >
                    Projects
                  </Link>
                </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            {/* Your content for column 3 */}
            <ul className="text-left px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="#"
                >
                  Testimonials
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="#"
                >
                  Blogs
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="#"
                >
                  Gallery
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="#"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Social</h2>
            <div className="mt-10">
              <a
                href="https://www.instagram.com/borneel.phukan"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  icon={faInstagram}
                  target="_blank"
                  size="2x"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/borneelphukan/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  icon={faLinkedin}
                  target="_blank"
                  size="2x"
                />
              </a>
              <a href="https://github.com/borneelphukan" target="_blank">
                <FontAwesomeIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  icon={faGithub}
                  target="_blank"
                  size="2x"
                />
              </a>
              <a href="mailto:borneelphukan@gmail.com">
                <FontAwesomeIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  icon={faEnvelope}
                  target="_blank"
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved tagline */}
      <div className="flex flex-col items-center">
  <LanguageSelector />
  <p className="mt-8 text-sm text-slate-400">
    Borneel Bikash Phukan &copy; {new Date().getFullYear()} {t('rights')}
  </p>
</div>

      
    </footer>
  );
};

export default Footer;
