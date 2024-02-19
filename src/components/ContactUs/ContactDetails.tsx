import React from "react";
import ContactCard from "../card/ContactCard";

const ContactDetails = () => {
  return (
    <div className="py-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          {/* First Card */}
          <ContactCard
            icon="fa-light fa-map"
            title="My Address"
            address="Vettersstraße 70, Chemnitz 09126 Deutschland"
          />
          {/* Second Card */}
          <ContactCard
            icon="fa-light fa-calendar"
            title="My Availability"
            address="I am available 5 days a week from 9am to 6pm. Saturday & Sunday closed."
          />
          {/* Third Card */}
          <ContactCard
            icon="fa-light fa-phone"
            title="Let's Talk"
            address="Phone Number: +49 176 7125 9396 Whatsapp: +91 943500 5619"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
