import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import ServiceBanner from "@/components/Services/ServiceBanner";
import { TestimonialCarousel } from "@/components/carousel/TestimonialCarousel";
import FreelanceStack from "@/components/Services/Freelance/FreelanceStack";

const Services = () => {
  return (
    <DefaultLayout>
      <ServiceBanner />
      <CardStack />
      <FreelanceStack/>
      <TestimonialCarousel/>
    </DefaultLayout>
  );
};

export default Services;
