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
        <div>
          <h1 className="font-semibold text-slate-600 text-center sm:text-left">
            {title}
          </h1>
          <h1 className="font-base text-slate-600 text-center sm:text-left">
            {company}
            <br />
            <span className="font-semibold text-sm text-slate-600">
              ({type})
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <time className="font-sm text-blue-400 text-right whitespace-nowrap">
            {date}
          </time>
          <h2 className="font-base text-slate-600 whitespace-nowrap">
            {location}
          </h2>
          {reference && (
            <a
              href={reference}
              className="font-semibold text-sm text-blue-600 text-right whitespace-nowrap underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reference Letter
            </a>
          )}
        </div>
      </div>
      <div>
        <p className="text-base font-bold text-slate-600 ">Skills: </p>
        <p className="text-base text-slate-600">{skills}</p>
      </div>
      <ul className="list-disc m-2 sm:m-3 md:m-5 text-base text-slate-600">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
