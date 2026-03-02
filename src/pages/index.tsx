import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";

import Link from "next/link";

type CategoryProps = {
  slug: string;
  title: string;
};

const categories: CategoryProps[] = [
  { slug: "tech", title: "Tech Blogs" },
  //{ slug: "travel", title: "Travel Blogs" },
  { slug: "career", title: "Career Talks" },
];

const Category = ({ slug, title }: CategoryProps) => (
  <li className="my-2 mx-auto">
    <Link href={`/blogs/${slug}`} className="text-blue-400 hover:text-blue-600">
      {title}
    </Link>
  </li>
);

const Home = () => {
  const role = ["I am", "Software Developer", "#Open_to_Work"];
  const aboutme = [
    "About Me",
    "Hi! I'm Borneel, a Software Developer committed to developing and delivering state-of-the-art full-stack web and mobile applications, secured APIs, and clean User Interfaces, all by leveraging suitable Agile Methodologies. My passion for developing impactful applications and contributing to technology growth has driven me to pursue a career in the field of web engineering. My contributions to open-source development on GitHub can provide you with a preliminary idea about my work and contributions so far.",
    "Who am I?",
    "I have 3+ years of experience in software development. My expertise includes JavaScript (TypeScript), Next.js, React (Next.js), Node.js (Nest.js), PostgreSQL, and TailwindCSS. I actively share knowledge through blog posts and online platforms. I hold a master's degree in Web Engineering from Chemnitz University of Technology, Germany, and a bachelor's degree from Kalinga Institute of Industrial Technology, India. Additionally, I am the founder of Graminate, an AI-powered SaaS platform serving agricultural startups in digitalising operations and production. If you need a dedicated and creative professional, look no further.",
  ];

  return (
    <DefaultLayout>
      {/* Banner section */}
      <div className="bg-[url('/banners/home-banner.png')] bg-cover bg-center h-full w-full">
        <div className="container mx-auto px-10">
          {/*Banner Goes Here*/}
          <div className="py-16 md:py-24 lg:py-32 xl:py-48 text-black">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-base md:text-xl lg:text-xl xl:text-xl font-semibold mb-2 text-white uppercase">
                {role[0]}{" "}
                <span className="text-base md:text-xl lg:text-xl xl:text-2xl font-semibold mb-2 text-blue-400 uppercase">
                  Borneel Bikash Phukan
                </span>
              </h1>
              <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-2 text-white">
                {role[1]}{" "}
                <span className="text-4xl font-bold text-blue-400">&</span>
              </h1>
              <h1 className="md:text-4xl lg:text-4xl xl:text-4xl font-semibold text-4xl mb-4 text-white cursor-blink">
                {role[2]}
              </h1>
              <p className="text-md md:text-lg lg:text-xl text-gray-300 max-w-[60%]">
                A Software Developer focused on developing customer-oriented applications, designing impactful APIs, responsive UI, AI microservices and delivering successful projects to drive business growth and revenues.
              </p>
              {/* <Button
                bgColor="black"
                textColor="white"
                text="Download CV"
                file={"docs/CV.pdf"}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12 p-4 md:p-8">
        <div className="md:w-4/5 lg:w-4/5">
          <div className="p-6 md:p-8 bg-white rounded-lg shadow-sm">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center text-gray-900">
              {aboutme[0]}
            </h1>

            <p className="text-base md:text-lg text-gray-700 text-left leading-relaxed mb-8">
              {aboutme[1]}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 h-48 w-48 md:h-52 md:w-52 mx-auto md:mx-0 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-200">
                <Image
                  src={"/assets/borneel.png"}
                  width={200}
                  height={200}
                  alt="Your Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                <p className="font-semibold text-lg md:text-xl text-gray-800 mb-2">
                  {aboutme[2]}
                </p>

                <p className="text-base md:text-lg text-gray-700 text-left leading-relaxed">
                  {aboutme[3]}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/5 lg:w-1/5 mt-8 md:mt-0">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm text-center h-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              My Blogs
            </h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <Category
                  key={category.slug}
                  slug={category.slug}
                  title={category.title}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
