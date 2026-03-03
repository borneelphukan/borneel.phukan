import Link from "next/link";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  const links = [
    [
      "Portfolio",
      "Experiences",
      "Education",
      "Skills",
      "Publication",
      "Projects",
    ],
    ["Explore", "Services", "Blogs", "Contact"],
    ["Social"],
  ];

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
            <p className="text-sm text-left text-slate-300 leading-6">
              Welcome to my personal website, where I proudly showcase my strengths and skills. Explore my journey, accomplishments, and occasional blog posts. Thank you for visiting!
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{links[0][0]}</h2>
            <ul className="text-center md:text-left px-6 md:px-24">
              <li className="py-2">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Portfolio#Experience"
                >
                  {links[0][1]}
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Portfolio#Education"
                >
                  {links[0][2]}
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Portfolio#Skills"
                >
                  {links[0][3]}
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Portfolio#Publication"
                >
                  {links[0][4]}
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Portfolio#Projects"
                >
                  {links[0][5]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{links[1][0]}</h2>
            <ul className="text-center md:text-left px-6 md:px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Services"
                >
                  {links[1][1]}
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/blogs"
                >
                  {links[1][2]}
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  href="/Contact"
                >
                  {links[1][3]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{links[2][0]}</h2>
            <div className="mt-10">
              <a
                href="https://www.instagram.com/borneel.phukan"
                target="_blank"
              >
                <InstagramIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  fontSize="large"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/borneelphukan/"
                target="_blank"
              >
                <LinkedInIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  fontSize="large"
                />
              </a>
              <a href="https://github.com/borneelphukan" target="_blank">
                <GitHubIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  fontSize="large"
                />
              </a>
              <a href="mailto:borneelphukan@gmail.com">
                <EmailIcon
                  className="mx-3 my-3 hover:text-blue-400"
                  fontSize="large"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Rights Reserved tagline */}
      <p className="mt-2 text-sm text-slate-400">
        Borneel Bikash Phukan &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
