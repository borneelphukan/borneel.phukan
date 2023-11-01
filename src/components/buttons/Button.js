import React from "react";

const Button = ({ bgColor, textColor, text }) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} my-10 py-3 px-7 rounded-md shadow-lg hover:bg-black hover:text-white border border-solid border-black`}
    >
      {text}
    </button>
  );
};

export default Button;
