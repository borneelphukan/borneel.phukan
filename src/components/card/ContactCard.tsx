import React from "react";
import "font-awesome/css/font-awesome.min.css";

type Props = {
  icon: string;
  title: string;
  address: string;
};

const ContactCard = ({ icon, title, address }: Props) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg py-10 px-5">
      <div className="text-4xl text-gray-600 px-5">
        <i className={`text-4xl text-gray-500 fa ${icon} mb-4`}></i>
      </div>

      <div className="px-6 py-4">
        <h2 className="font-semibold mb-2 text-lg md:text-xl text-center">
          {title}
        </h2>
        <p className="text-base mx-10">{address}</p>
      </div>
    </div>
  );
};

export default ContactCard;
