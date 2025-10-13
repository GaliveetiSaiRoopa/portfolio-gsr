import React, { useState } from "react";
import education from "../icons/education.svg";
import emailIcon from "../icons/email.svg";
import linkedin from "../icons/linkedin.svg";

const initial_fields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [fields, setFields] = useState(initial_fields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="md:pt-8 pt-4 contact-background">
      <div className="w-full lg:px-36 px-6 flex flex-col md:gap-6 gap-4 items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-slate-600 flex justify-center">
          {" "}
          Let's Connect
        </h1>
        <p className="font-times text-base">
          Let’s build something amazing together. Connect with me - I’m just a
          message away!
        </p>
      </div>
      <div className="grid md:grid-cols-3 md:gap-10 w-full md:p-8 grid-cols-1 p-4 gap-5">
        <div className="md:col-span-2 border border-white rounded-md shadow-xl opacity-100">
          <div className="w-full flex justify-center flex-col md:gap-6 md:p-10 p-5 gap-4">
            <h1 className="font-bold text-xl font-times text-slate-600">
              Send Message
            </h1>
            <form className="md:space-y-6 space-y-4">
              <div className="w-full flex md:justify-between md:flex-row flex-col md:gap-8 gap-5">
                <input
                  name="name"
                  value={fields?.name}
                  className="w-full h-10 rounded-md px-3 font-times text-black text-sm focus:outline-none"
                  placeholder="Your Name"
                  onChange={handleChange}
                  required={true}
                />
                <input
                  name="email"
                  value={fields?.email}
                  className="w-full h-10 rounded-md px-3 font-times text-black text-sm focus:outline-none"
                  placeholder="Your Email"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="">
                <input
                  name="subject"
                  value={fields?.subject}
                  className="w-full h-10 rounded-md px-3 font-times text-black text-sm focus:outline-none"
                  placeholder="Subject"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="">
                <input
                  name="message"
                  value={fields?.message}
                  className="w-full h-10 rounded-md px-3 font-times text-black text-sm focus:outline-none"
                  placeholder="Your Message"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <button
                className="bg-purple-600 text-white font-semibold w-full h-10 rounded-md shadow-md hover:bg-purple-400"
                onClick={() => {}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="md:col-span-1 w-full flex justify-center flex-col gap-4 font-times">
          <h1 className="font-bold text-2xl  text-slate-600">Get In Touch</h1>

          <div className="flex gap-3 items-center border border-white rounded-md p-3 shadow-lg">
            <img src={emailIcon} alt="email" className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-slate-600">Email</p>
              <p className="text-sm">sairoopagaliveeti09@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center border border-white rounded-md p-3 shadow-lg">
            <img src={linkedin} alt="linkedin" className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-slate-600">Linkedin</p>
              <a
                href="https://www.linkedin.com/in/galiveeti09/"
                target="_blank"
                className="text-sm"
              >
                linkedin.com/in/galiveeti09/
              </a>
            </div>
          </div>
          <div className="border border-white rounded-md p-3 shadow-lg">
            <p className="text-slate-600">Education</p>
            <p className="text-sm">Bachelor of Technology</p>
            <p className="text-sm">
              Motilal Nehru National Institute of Technology, Allahabad
            </p>
            <p className="text-sm">2020 - 2024 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
