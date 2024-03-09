import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import Testimonials from "@/components/Services/Testimonials/Testimonials";
import ServiceBanner from "@/components/Services/ServiceBanner";
import { TestimonialCarousel } from "@/components/Services/Testimonials/Carousel";

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
