import DefaultLayout from "@/layout/DefaultLayout";
import Image from "next/image";
import { getR2Url } from "@/config/r2";

import Link from "next/link";
import { TestimonialCarousel } from "@/components/carousel/TestimonialCarousel";
import Skills from "@/components/Portfolio/Skills";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";
import { Icon } from "@/components/common/Icon";
import Button from "@/components/common/Button";
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
      {/* Banner section */}
      <div 
        className="sticky top-0 -z-10 h-[100vh] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('${getR2Url("banners/home-banner.png")}')` }}
      >
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

          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#e2e4e9] uppercase tracking-tighter leading-none mb-5 w-full drop-shadow-2xl">
            Borneel Bikash Phukan
          </h1>
          
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-3 font-light">
              Software Developer
            </p>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed text-center">
              4+ years of leading cross-functional teams to build customer-centric SaaS and mobile applications. From defining product roadmaps to optimizing GenAI-driven features and API performance, I bridge the gap between complex engineering and strategic business growth.
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
                  src={getR2Url("assets/borneel.jpg")}
                  width={600}
                  height={800}
                  alt="Your Avatar"
                  className="w-full h-[350px] md:h-full md:absolute md:inset-0 object-cover"
                />
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-800 mb-4 tracking-tight leading-tight">
                  Who am I as a <span className="text-[#3b82f6]">Software Developer </span>?
                </h2>
                
                <p className="text-gray-500 font-light leading-relaxed mb-5 text-sm md:text-base lg:text-lg">
                For me, software development is about bridging the gap between technical possibility and business impact. My goal is to build scalable, user-centric products that align engineering excellence with strategic growth objectives.
                </p>

                <p className="text-gray-500 font-light leading-relaxed mb-5 text-sm md:text-base lg:text-lg">
                I leverage my deep technical background to lead cross-functional teams, translate complex requirements into actionable roadmaps, and ensure we ship products that solve real user pain points and drive sustainable business value.
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
                    <span className="text-gray-500 text-sm md:text-base mb-1 tracking-wide">Products & Features Shipped</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-800">50+</span>
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
      <section id="Services" className="sticky top-0 z-0 flex flex-col items-center justify-center h-[100vh] pb-[20vh] md:pb-0 w-full overflow-hidden bg-gray-900">
        <Image
          src={getR2Url("banners/service_banner.png")}
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

            <p className="text-lg leading-relaxed text-gray-200 sm:text-lg md:text-xl font-light mb-6">
              With 5+ years of experience bridging Engineering and Product, I help startups scale by defining clear product strategies and leading technical execution that delivers measurable impact. 
            </p>

            <p className="text-lg leading-relaxed text-gray-200 sm:text-lg md:text-xl font-light mb-4">
              Following are the fields that I offer as a freelancer:
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 text-gray-200 text-lg md:text-xl font-light mb-10 w-full list-none">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Product Strategy
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Roadmap & Backlog Management
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Technical Consultation
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                variant="transparent"
                href="https://www.upwork.com/freelancers/~01b548e4441bd9620c?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {}}
                className="hover:bg-[#14a800] hover:border-[#14a800] hover:shadow-[#14a800]/50"
                icon={{
                  right: <Icon type="ArrowForward" className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                }}
              >
                <span className="flex items-center">
                  Hire on Upwork
                </span>
              </Button>
              <Button
                variant="transparent"
                href="https://www.linkedin.com/in/borneelphukan/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {}}
                className="hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:shadow-[#0a66c2]/50"
                icon={{
                  right: <Icon type="ArrowForward" className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                }}
              >
                <span className="flex items-center">
                  Linkedin
                </span>
              </Button>
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
