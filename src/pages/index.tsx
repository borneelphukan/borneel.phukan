import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";

import Link from "next/link";
import { TestimonialCarousel } from "@/components/carousel/TestimonialCarousel";
import Skills from "@/components/Portfolio/Skills";
import CVBar from "@/components/common/CVBar";
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
  return (
    <DefaultLayout>
      {/* Sticky Bar */}
      <CVBar />

      {/* Banner section */}
      <div className="sticky top-0 -z-10 h-[100vh] w-full bg-[url('/banners/home-banner.png')] bg-cover bg-center flex items-center justify-center overflow-hidden">
        {/* Vertical subtle column lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:12.5vw_100%]"></div>
        
        {/* Left side dots grid mask */}
        <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-[image:radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_right,white,transparent)]"></div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm md:text-base font-light backdrop-blur-md flex items-center gap-2">
              Hello 👋
            </span>
          </div>
          
          <h2 className="text-center text-gray-100 text-2xl md:text-3xl lg:text-4xl font-light mb-4 tracking-wider">
            I'm
          </h2>

          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#e2e4e9] uppercase tracking-tighter leading-none mb-10 w-full drop-shadow-2xl">
            Borneel Bikash Phukan
          </h1>
          
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-3 font-light">
              I am a <span className="font-medium">Software Developer</span>.
            </p>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed text-center">
              Focused on developing customer-oriented applications, designing impactful APIs, responsive UI, AI microservices and delivering successful projects to drive business growth and revenues.
            </p>
          </div>
        </div>
      </div>

      <div className="z-10 w-full relative">
        {/* About Me Section */}
        <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-12 p-4 md:p-8">
          <div className="md:w-4/5 lg:w-4/5">
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] shadow-sm flex flex-col md:flex-row overflow-hidden border border-white/20">
              {/* Left Side: Image */}
              <div className="w-full md:w-2/5 flex-shrink-0 relative bg-gray-100">
                <Image
                  src={"/assets/borneel.jpg"}
                  width={600}
                  height={800}
                  alt="Your Avatar"
                  className="w-full h-[350px] md:h-full md:absolute md:inset-0 object-cover"
                />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-800 mb-4 tracking-tight leading-tight">
                  Who am I as a <span className="text-[#3b82f6]">Developer</span>?
                </h2>
                
                <p className="text-gray-500 font-light leading-relaxed mb-10 text-sm md:text-base lg:text-lg">
                Product design for me is a responsibility- not just to users, but to the systems they interact with everyday. I focus on creating experiences that are intentional scalable, and grounded on research for real user needs because clarity is not decoration, it is impact.
                </p>

                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base mb-1 tracking-wide">Years of Experience</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">5+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base mb-1 tracking-wide">Clients</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">10+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base mb-1 tracking-wide">Projects Completed</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">15+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base mb-1 tracking-wide">Hours of Coding</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">60000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/5 lg:w-1/5 mt-8 md:mt-0">
            <div className="p-6 bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-sm text-center h-full">
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
        <Skills />
        <TestimonialCarousel />
      </div>
    </DefaultLayout>
  );
};

export default Home;
