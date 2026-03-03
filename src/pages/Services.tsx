import DefaultLayout from "@/layout/DefaultLayout";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";
import Image from "next/image";


const Services = () => {

  return (
    <DefaultLayout>
      <section className="sticky top-0 -z-10 flex flex-col items-center justify-center h-[100vh] w-full overflow-hidden bg-gray-900">
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
                <span className="text-white font-semibold tracking-wide md:text-lg">Hire me on Upwork</span>
                <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-[#1dbf73] backdrop-blur-md border border-white/20 hover:border-[#1dbf73] rounded-full transition-all duration-300 shadow-lg hover:shadow-[#1dbf73]/50 w-full sm:w-auto"
              >
                <span className="text-white font-semibold tracking-wide md:text-lg">Hire me on Fiverr</span>
                <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="z-10 w-full relative bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
 
        <FreelanceStack />
      </div>
    </DefaultLayout>
  );
};

export default Services;
