import { SvgIconComponent } from '@mui/icons-material';

type Props = {
  icon: SvgIconComponent;
  title: string;
  description?: string;
  link?: string;
};

const ContactCard = (props: Props) => {
  const { icon, title, description, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="max-w-xl bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-sm py-10 px-5 cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="text-4xl text-gray-600 px-5">
          <props.icon className="text-gray-500 mb-4" style={{ fontSize: '2.5rem' }} />
        </div>

        <div className="px-6 py-4">
          <h2 className="font-semibold mb-2 text-lg md:text-xl text-center">
            {title}
          </h2>
          <p className="text-base mx-10">
            <a target="_link">{description}</a>
          </p>{" "}
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
