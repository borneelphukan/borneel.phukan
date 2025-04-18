import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import { TestimonialCarousel } from "@/components/carousel/TestimonialCarousel";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <div className="service-cover">
        <div className="container mx-auto px-10">
          <div className="py-10 md:py-10 lg:py-10 xl:py-10 text-black">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="my-5 md:my-10 md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-3xl mb-4 text-white">
                {t("serviceHeader")}
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-300 w-[50%] text-center mx-auto">
                {t("serviceBanner")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Stack */}
      <CardStack />
      <FreelanceStack />
      <TestimonialCarousel />
    </DefaultLayout>
  );
};

export default Services;
