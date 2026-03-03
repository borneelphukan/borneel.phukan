import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";

import Link from "next/link";
import { TestimonialCarousel } from "@/components/carousel/TestimonialCarousel";
import Skills from "@/components/Portfolio/Skills";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";
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
            I&apos;m
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
                  Who am I as a <span className="text-[#3b82f6]">Developer </span>?
                </h2>
                
                <p className="text-gray-500 font-light leading-relaxed mb-5 text-sm md:text-base lg:text-lg">
                Software development for me is not just writing code, but a critical responsibility. My goal is to build fail-safe, scalable, and user-centric applications that solve real-world problems and drive business growth.
                </p>

                <p className="text-gray-500 font-light leading-relaxed mb-5 text-sm md:text-base lg:text-lg">
                I approach every project with a problem-solving mindset, focusing on delivering high-quality, maintainable code that aligns with business objectives.
                </p>

                <div className="grid grid-cols-2 gap-y-5 gap-x-6">
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
      </div>

      {/* Services Banner exactly cloned from Services.tsx */}
      <section id="Services" className="sticky top-0 -z-10 flex flex-col items-center justify-center h-[100vh] w-full overflow-hidden bg-gray-900">
        <Image
          src="/banners/service_banner.png"
          alt="Services background"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent -z-10"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full flex justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-[0.2em] uppercase mb-8 shadow-sm">
              Available for Hire
            </span>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white drop-shadow-2xl mb-6">
              Services I Offer
            </h1>

            <p className="text-lg leading-relaxed text-gray-200 sm:text-xl md:text-2xl drop-shadow-lg font-light mb-12">
              When I am not engaged in personal projects, I might be freelancing for a reputable company or startup, and I could potentially contribute to your project as well.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://www.upwork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-[#14a800] backdrop-blur-md border border-white/20 hover:border-[#14a800] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#14a800]/50 w-full sm:w-auto"
              >
                <span className="text-white font-semibold tracking-wide md:text-lg">Hire on Upwork</span>
                <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Re-open the high z-index native scrolling layer so the content below gracefully overlaps the sticky banner behind it */}
      <div className="z-10 w-full relative bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        <FreelanceStack />
        <TestimonialCarousel />
      </div>
    </DefaultLayout>
  );
};

export default Home;
