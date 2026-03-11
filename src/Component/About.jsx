import React from "react";

import Profile from "../assets/profile.jpeg";

function About() {
  return (
    <div className="px-6">
      {/* Heading */}

      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">Get To Know More</p>
        <h1 className="text-4xl font-semibold mt-3">About Me</h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="w-74 h-85 object-cover rounded-2xl shadow-2xl"
            src={Profile}
            alt="My Profile"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6">
          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="border w-full sm:w-72 h-40 rounded-xl flex flex-col justify-center items-center shadow-md">
              <h2 className="font-bold">Education</h2>
              <h4 className="font-semibold pt-2">G.T.N Arts College</h4>
              <p className="text-center">Bachelor of Computer Application</p>
            </div>

            <div className="border w-full sm:w-72 h-40 rounded-xl flex flex-col justify-center items-center text-center shadow-md">
              <h2 className="font-bold">Certified Course</h2>
              <h4 className="font-semibold pt-2">Frontend Developer</h4>
              <p>6 Month Course - SDLC Dindigul</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Enthusiastic Frontend Developer with knowledge of HTML, CSS,
              JavaScript, React, Tailwind CSS, Bootstrap, and jQuery. Passionate
              about building responsive, user-friendly websites and eager to
              contribute to real-world projects.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
