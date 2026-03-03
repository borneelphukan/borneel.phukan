import Image from "next/image";

type Props = {
  avatar: string;
  name: string;
  comment: string;
  role: string;
};

const TestimonialsCard = (props: Props) => {
  const { avatar, name, comment, role } = props;

  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm w-full">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-3">
          <Image
            src={avatar}
            alt={`${name}'s Avatar`}
            width={48}
            height={48}
            className="rounded-full object-cover h-12 w-12"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>

      <div className="flex-grow">
        <p className="text-gray-500 text-sm leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
