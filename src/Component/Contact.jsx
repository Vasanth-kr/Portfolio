import React from "react";
import { IoMailSharp } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div>
      {/* Heading */}

      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">Get in Touch</p>
        <h1 className="text-4xl font-semibold mt-3">Contact Me</h1>
      </div>

      {/* Contant */}

      <div className="flex items-center justify-center p-5  ">
        <div className="border border-gray-600 w-120 h-auto gap-5 lg:flex-row lg:h-20 lg:w-130 rounded-2xl flex-col  flex items-center justify-evenly  p-5">
          <div className="text-xl md:text-2xl border-1 rounded-full w-10 h-10 bg-black text-white flex items-center justify-center">
            <IoMailSharp />
          </div>
          <a
            className="text-sm md:text-2xl font-semibold"
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          >
            Vasanth@Email.com
          </a>
          <div className="text-xl md:text-2xl border-1 rounded-full w-10 h-10 bg-black text-white flex items-center justify-center">
            <FaLinkedin />
          </div>
          <a
            className="text-sm md:text-2xl font-semibold"
            href="https://www.linkedin.com/in/vasantha-kumar-kv/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
