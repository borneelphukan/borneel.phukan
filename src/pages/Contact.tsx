import React from "react";
import ContactDetails from "@/components/Contact/ContactDetails";
import DefaultLayout from "@/layout/DefaultLayout";
import ContactForm from "@/components/Contact/ContactForm";


const ContactUs = () => {
  return (
    <DefaultLayout>
      <ContactDetails />
      <ContactForm />
    </DefaultLayout>
  );
};
export default ContactUs;
