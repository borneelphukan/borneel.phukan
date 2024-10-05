import React from "react";
import ContactCard from "../card/ContactCard";

const ContactDetails = () => {
  return (
    <div className="pt-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          <ContactCard
            icon="fa-light fa-map"
            title="My Address"
            address="Vettersstraße 70, Chemnitz 09126 Deutschland"
          />
          <ContactCard
            icon="fa-light fa-calendar"
            title="My Availability"
            hoverDisabled
            address="Set up an appointment on Calendly"
          />
          <ContactCard
            icon="fa-light fa-dollar"
            title="Donate"
            donateMode
            paypal="https://www.paypal.com/paypalme/borneelphukan" // Update with your PayPal link
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
