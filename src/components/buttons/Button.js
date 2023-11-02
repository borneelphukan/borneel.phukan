import React from "react";

const Button = ({ bgColor, textColor, text }) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} my-10 py-3 px-7 rounded-md shadow-lg hover:bg-blue-950 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
