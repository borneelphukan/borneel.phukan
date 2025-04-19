import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faLink,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  reference?: string;
  skills: string[];
  description: string[];
  image?: string;
};

const ExperienceCard = (props: Props) => {
  const {
    title,
    company,
    type,
    date,
    location,
    reference,
    skills,
    description,
  } = props;

  return (
    <div className="border bg-white w-full sm:w-[calc(90%-2.5rem)] md:w-[calc(50%-2.5rem)] px-4 sm:px-6 md:px-10 py-6 rounded-xl border-1 shadow-md">
     <div className="flex flex-col sm:flex-row items-center justify-between space-x-2 sm:space-x-4 md:items-start md:justify-between">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-md font-medium text-gray-700">{company}</p>
          <p className="text-sm text-gray-500">({type})</p>
        </div>

        {/* Date, Location, Reference - Left aligned */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center text-sm text-gray-500">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="w-3 h-3 mr-1.5 text-gray-400"
            />
            <time>{date}</time>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="w-3 h-3 mr-1.5 text-gray-400"
            />
            <span>{location}</span>
          </div>
          {reference && (
            <a
              href={reference}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLink} className="w-3 h-3 mr-1.5" />
              Reference Letter
            </a>
          )}
        </div>
      </div>

      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description Section */}
      {description && description.length > 0 && (
        <div className="flex-grow">
          <ul className="space-y-1.5 text-sm text-gray-700 list-inside">
            {description.map((point, i) => (
              <li key={i} className="flex items-start">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
