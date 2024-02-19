import React from "react";
import "font-awesome/css/font-awesome.min.css";

type Props = {
  icon: string;
  title: string;
  content: string;
  skills: string;
};

const Card = ({ icon, title, content, skills }: Props) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white p-5">
      <div className="text-4xl text-gray-600 px-5">
        <i className={`text-4xl text-gray-500 fa ${icon} mb-4`}></i>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-2xl text-gray-700 font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 font-light text-base text-justify pb-5">{content}</p>
        <h4 className="text-base text-gray-700 font-semibold">Skills</h4>
        <p className="font-medium text-sm text-gray-700 text-justify">{skills}</p>
      </div>
      {/* <div className="px-6 py-4">
        <a
          href="#"
          className="font-bold text-gray-700 hover:text-blue-400 transition-colors duration-300 underline underline-offset-8"
        >
          Read More
        </a>
      </div> */}
    </div>
  );
};

export default Card;
