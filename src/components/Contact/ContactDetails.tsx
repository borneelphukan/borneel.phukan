import React from "react";
import ContactCard from "../card/ContactCard";
import { useTranslation } from "react-i18next";

const ContactDetails = () => {
  const { t } = useTranslation();
  const contactCardHeader: string[] = t("contactCardHeader", {
    returnObjects: true,
  }) as string[];

  const contactCardDescription: string[] = t("contactCardDescription", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="pt-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          <ContactCard
            icon="fa-light fa-map"
            title={contactCardHeader[0]}
            description={contactCardDescription[0]}
          />
          <ContactCard
            icon="fa-light fa-calendar"
            title={contactCardHeader[1]}
            description={contactCardDescription[1]}
            link="https://calendly.com/borneelphukan/30min"
          />
          <ContactCard
            icon="fa-light fa-dollar"
            title={contactCardHeader[2]}
            description={contactCardDescription[2]}
            link="https://www.paypal.com/paypalme/borneelphukan"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
