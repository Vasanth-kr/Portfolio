import React from "react";

function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-5">
      <p className="text-gray-500">Get in Touch</p>
      <h1 className="text-4xl font-semibold mt-2">Contact Me</h1>

      <div className="grid md:grid-cols-2 gap-10 mt-12 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="flex items-center gap-4 border p-4 rounded-xl bg-white shadow-sm">
            <i className="fa-solid fa-envelope text-2xl flex-shrink-0"></i>
            <p className="text-lg break-words">vasanth@email.com</p>
          </div>

          <div className="flex items-center gap-4 border p-4 rounded-xl bg-white shadow-sm">
            <i className="fa-brands fa-linkedin text-2xl flex-shrink-0"></i>
            <a
              href="https://www.linkedin.com/in/vasantha-kumar-kv/"
              target="_blank"
              rel="noreferrer"
              className="text-lg break-words"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-4 border p-4 rounded-xl bg-white shadow-sm">
            <i className="fa-brands fa-github text-2xl flex-shrink-0"></i>
            <a
              href="https://github.com/Vasanth-kr"
              target="_blank"
              rel="noreferrer"
              className="text-lg break-words"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg outline-none"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="border p-3 rounded-lg outline-none"
          ></textarea>

          <button className="bg-black text-white py-3 rounded-lg hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
