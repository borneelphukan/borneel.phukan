import { useState } from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

const ProjectCard = (props: Props) => {
  const { title, description, buttonText, link } = props;
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const openPublicationLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="shadow-md border rounded-xl p-10 hover:shadow-xl transition duration-300 ease-in-out">
      <div className="text-xl font-bold mb-2">{title}</div>
      <div className="mb-4">
        {expanded ? description : `${description.slice(0, 150)}... `}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={toggleDescription}
        >
          {expanded ? " Read less" : " Read more"}
        </span>
      </div>

      <div className="flex mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-5 rounded-xl"
          onClick={openPublicationLink}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
