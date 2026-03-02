import ContactCard from "../card/ContactCard";
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const ContactDetails = () => {
  const contactCardHeader = ["My Address", "My Availability", "Donate"];
  const contactCardDescription = [
    "Erich-Ollenhauer-Straße 2, 63263 Neu-Isenburg, Germany",
    "Set up an appointment on Calendly",
    "Like my work ? You can donate on Paypal",
  ];

  return (
    <div className="pt-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          <ContactCard
            icon={MapIcon}
            title={contactCardHeader[0]}
            description={contactCardDescription[0]}
          />
          <ContactCard
            icon={CalendarMonthIcon}
            title={contactCardHeader[1]}
            description={contactCardDescription[1]}
            link="https://calendly.com/borneelphukan/30min"
          />
          <ContactCard
            icon={AttachMoneyIcon}
            title={contactCardHeader[2]}
            description={contactCardDescription[2]}
            link="https://www.paypal.com/paypalme/borneelphukan"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
