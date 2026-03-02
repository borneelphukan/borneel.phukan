import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";


const Services = () => {

  return (
    <DefaultLayout>
      <section className="relative isolate overflow-hidden bg-gray-900">
        <img
          src="/banners/service_banner.png"
          alt="Services background"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/50 to-transparent -z-10"></div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Services
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
              When I am not engaged in personal projects, I might be freelancing for a reputable company or startup, and I could potentially contribute to your project as well.
            </p>
          </div>
        </div>
      </section>

      <CardStack />
      <FreelanceStack />
    </DefaultLayout>
  );
};

export default Services;
