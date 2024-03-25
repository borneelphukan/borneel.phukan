import React from "react";
import "font-awesome/css/font-awesome.min.css";

type Props = {
  icon: string;
  title: string;
  address?: string;
  numbers?: boolean;
  number1?: string;
  number2?: string;
  hoverDisabled?: boolean;
};

const ContactCard = (props: Props) => {
  const { icon, title, address, numbers, number1, number2, hoverDisabled } = props;
  const hoverClass = hoverDisabled ? "" : "hover:underline";
  const linkHref = hoverDisabled ? undefined : "https://www.google.com/maps/place/Vettersstra%C3%9Fe+70,+09126+Chemnitz/@50.8173285,12.9307568,17z/data=!4m6!3m5!1s0x47a74672d1ec64af:0xdb49748f352d915b!8m2!3d50.8173249!4d12.9356198!16s%2Fg%2F11csmw2xp0?authuser=0&entry=ttu";

  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg py-10 px-5">
      <div className="text-4xl text-gray-600 px-5">
        <i className={`text-4xl text-gray-500 fa ${icon} mb-4`}></i>
      </div>

      <div className="px-6 py-4">
        <h2 className="font-semibold mb-2 text-lg md:text-xl text-center">
          {title}
        </h2>
        {numbers ? (
          <div className="text-base mx-10">
            <p>Phone: <a href="tel:4917671259396" className={hoverClass}>{number1}</a></p>
            <p>Whatsapp: <a href="tel:919435005619" className={hoverClass}>{number2}</a></p>
          </div>
        ) : (
          <p className={`text-base mx-10 ${hoverClass}`}><a target="_link" href={linkHref}>{address}</a></p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
