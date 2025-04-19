import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import { TestimonialCarousel } from "@/components/carousel/TestimonialCarousel";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
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
              {t("serviceHeader")}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
              {t("serviceBanner")}
            </p>
          </div>
        </div>
      </section>

      <CardStack />
      <FreelanceStack />
      <TestimonialCarousel />
    </DefaultLayout>
  );
};

export default Services;
