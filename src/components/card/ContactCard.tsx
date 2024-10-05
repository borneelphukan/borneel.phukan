import React from "react";
import "font-awesome/css/font-awesome.min.css";

type Props = {
  icon: string;
  title: string;
  address?: string;
  donateMode?: boolean;
  paypal?: string;
  hoverDisabled?: boolean;
  link?: string;
};

const ContactCard = (props: Props) => {
  const { icon, title, address, donateMode, paypal, link } = props;

  const actualLink =
    donateMode && paypal
      ? paypal
      : title === "My Availability"
      ? "https://calendly.com/borneelphukan/30min"
      : link;

  return (
    <a href={actualLink} target="_blank" rel="noopener noreferrer">
      <div className="max-w-xl rounded overflow-hidden shadow-lg py-10 px-5 cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="text-4xl text-gray-600 px-5">
          <i className={`text-4xl text-gray-500 fa ${icon} mb-4`}></i>
        </div>

        <div className="px-6 py-4">
          <h2 className="font-semibold mb-2 text-lg md:text-xl text-center">
            {title}
          </h2>
          {donateMode ? (
            <div className="text-base mx-10">
              <p>
                Like my work ? You can buy me a coffee
              </p>
            </div>
          ) : (
            <p className="text-base mx-10">
              <a target="_link">{address}</a>
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
