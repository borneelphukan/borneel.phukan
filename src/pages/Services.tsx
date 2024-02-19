import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import CardStack from "@/components/Services/CardStack";
import Testimonials from "@/components/Services/Testimonials/Testimonials";
import ServiceBanner from "@/components/Services/ServiceBanner";

const Services = () => {
  return (
    <DefaultLayout>
      <ServiceBanner />
      <CardStack />
      <Testimonials />
    </DefaultLayout>
  );
};

export default Services;
