import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import ServiceBanner from "@/components/Services/ServiceBanner";
import { TestimonialCarousel } from "@/components/Services/Testimonials/TestimonialCarousel";
const Services = () => {
  return (
    <DefaultLayout>
      <ServiceBanner />
      <CardStack />
      <TestimonialCarousel/>
    </DefaultLayout>
  );
};

export default Services;
