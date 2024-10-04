import React, { useState } from "react";
import ContactCard from "../card/ContactCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactDetails = () => {
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

    // Form validation
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

    // Send email
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: "borneelphukan@gmail.com",
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_o3qsk4o",
        "template_1l1z64a",
        templateParams,
        "4mCVoV4stdlKOcZq0"
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
    <div className="py-20 justify-center my-3">
      <div className="container px-auto text-center overflow-hidden mx-auto flex flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-5">
          {/* Contact Cards */}
          <ContactCard
            icon="fa-light fa-map"
            title="My Address"
            address="Vettersstraße 70, Chemnitz 09126 Deutschland"
          />
          <ContactCard
            icon="fa-light fa-calendar"
            title="My Availability"
            hoverDisabled
            address="Monday - Friday: 9am to 6pm Saturday - Sunday: Closed."
          />
          <ContactCard
            icon="fa-light fa-phone"
            title="Let's Talk"
            numbers
            number1="+49 176 7125 9396"
            number2="+91 94350 05619"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="container px-6 py-10 mx-auto mt-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here"
              rows={6}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactDetails;
