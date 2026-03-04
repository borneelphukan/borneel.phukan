import ContactDetails from "@/components/Contact/ContactDetails";
import DefaultLayout from "@/layout/DefaultLayout";
import ContactForm from "@/components/Contact/ContactForm";


const ContactUs = () => {
  return (
    <DefaultLayout>
      <div className="relative min-h-screen w-full bg-slate-50/50 overflow-hidden">
        {/* Radiant blurred background elements */}
        <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-[20%] -right-[10%] w-[700px] h-[700px] bg-purple-400/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute -bottom-[10%] left-[10%] w-[600px] h-[600px] bg-sky-400/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="relative z-10 pb-20">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </DefaultLayout>
  );
};
export default ContactUs;
