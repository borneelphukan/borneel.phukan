import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import InputField from "../../components/common/InputField"; // Adjust the path based on where InputField is located
import TextareaWithIcon from "../common/TextArea";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const contactFormHeader: string[] = t("contactFormHeader", {
    returnObjects: true,
  }) as string[];
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
    <div className=" justify-center my-3">
      <div className="container px-6 py-10 mx-auto mt-8">
        {/* Flex container for the form and the map */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-8">
              {contactFormHeader}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full border shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  {/* First Name Input */}
                  <InputField
                    label="First Name"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    id="firstName"
                  />
                </div>
                <div>
                  {/* Last Name Input */}
                  <InputField
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    id="lastName"
                  />
                </div>
              </div>
              <div className="mb-4">
                {/* Email Address Input */}
                <InputField
                  label="Email Address"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  inputType="email"
                />
              </div>
              <div className="mb-6">
                {/* Message Input */}
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <TextareaWithIcon
                  value={formData.message}
                  onChange={handleChange}
                  id="message"
                  placeholder="Your message here"
                  icon="left" // You can change this to "right" or remove it
                  type="" // Can be "success", "error", "disabled", or empty
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>

          {/* Enable Map when card active */}
          {/* <div className="w-full lg:w-1/2">
            <MapWithLocation />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
