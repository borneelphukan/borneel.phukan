import Image from "next/image";
import Avatar from "../../../public/experience/PTT.png";

const FreelanceCard = () => {
  return (
    <div className="border bg-white w-1/2 px-8 py-4 rounded-xl border-1 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              height={100}
              width={100}
              src={Avatar}
              alt={"PTT"}
              className="my-6 md:w-10 md:h-10 border-2 border-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 rounded-full w-full h-full"
            />
          </div>
          <div>
            <h1 className="font-semibold text-slate-600 text-center md:text-left">UI/UX Designer</h1>
            <h1 className="font-base text-slate-600 text-center md:text-left">Proptechtools .GmbH</h1>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <time className="font-sm text-blue-400 text-right">August 2023 - October 2023</time>
          <h2 className="font-base text-slate-600 whitespace-nowrap">Munich, Germany</h2>
        </div>
      </div>
      <ul className="list-disc text-base text-slate-600 pl-6 mt-2 mb-5">
        <li>Developed an intuitive Figma Prototype for an ongoing API-based real estate valuation platform, ensuring a user-friendly interface for order creation and editing within a data-intensive table</li>
        <li>Collaborated with Design, Project Management and QA Team during groom meetings to develop and implement components, functionalities, and features based on customer requirements</li>
        <li>Implemented the prototype in an ongoing production environment</li>
      </ul>
    </div>

  );
};

export default FreelanceCard;
