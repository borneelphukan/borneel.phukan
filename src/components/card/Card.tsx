import "font-awesome/css/font-awesome.min.css";

type Props = {
  icon: string;
  title: string;
  content: string;
  skills: string;
};

const Card = ({ icon, title, content, skills }: Props) => {
  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-full p-4 shadow-sm">
          <i className={`text-3xl text-blue-600 fa ${icon}`}></i>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed flex-grow">
          {content}
        </p>
      </div>

      <div className="px-6 pb-6 pt-4 border-t border-gray-100 mt-auto">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Key Skills
        </h4>
        <p className="text-sm text-gray-700 leading-snug">{skills}</p>
      </div>
    </div>
  );
};

export default Card;
