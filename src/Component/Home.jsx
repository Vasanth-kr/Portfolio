import React from "react";
import sam from "../assets/profile.jpeg"


function Home() {
  return (
    <div className="flex flex-col items-center md:flex-row justify-center gap-10 w-full min-h-screen">

      <div>
        <img
          className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 border rounded-full object-cover hover:scale-105 transition duration-300"
          src={sam}
          alt="Vasantha Kumar Profile"
        />
      </div>

      <div className="mt-3 text-center flex flex-col items-center">

        <p className="text-gray-600 font-semibold text-md lg:text-xl">
          Hello I'm
        </p>

        <h2 className="text-3xl md:text-3xl lg:text-5xl md:font-semibold pt-3">
          Vasantha Kumar
        </h2>

        <h5 className="md:text-2xl lg:text-3xl text-gray-600 font-medium pt-2">
          Frontend Developer
        </h5>

        <div className="mt-4">

          <a
            href="/vasantha-kumar-cv.pdf"
            download
            className="border px-4 py-3 rounded-xl hover:bg-black hover:text-white transition duration-300 cursor-pointer m-3"
          >
            Download CV
          </a>

          <button className="border px-4 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            Contact Info
          </button>

          <div className="mt-4">

            <a
              className="text-3xl cursor-pointer m-3"
              href="https://www.linkedin.com/in/vasantha-kumar-kv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              className="text-3xl cursor-pointer"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;