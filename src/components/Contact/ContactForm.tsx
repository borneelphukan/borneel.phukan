import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Input from "../input";
import TextArea from "../textarea";
import Button from "../button";

const ContactForm = () => {
  const contactFormHeader = "Get in Touch";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      to_name: "borneelphukan@gmail.com",
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then(
        () => {
          toast.success("Message sent");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
          console.error("Email send error: ", error);
        }
      );
  };

  return (
    <div className="flex justify-center my-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-6">
              {contactFormHeader}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-2xl px-6 py-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name Input */}
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  id="firstName"
                />

                {/* Last Name Input */}
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  id="lastName"
                />
              </div>

              {/* Email Address Input */}
              <div className="mb-6">
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  inputType="email"
                />
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <TextArea
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  placeholder="Your message here"
                  icon="left"
                  type=""
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="primary"
                  className="px-8 py-3 w-full lg:w-auto text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </form>
            <ToastContainer />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
