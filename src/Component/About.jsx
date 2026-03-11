import React from "react";

import Profile from "../assets/profile.jpeg"

function About() {
  return (
    <div className="px-6">
       {/* Heading */}

      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">Browse My Recent</p>
        <h1 className="text-4xl font-semibold mt-3">Projects</h1>
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
              <h4 className="font-semibold pt-2">MEAN Stack Developer</h4>
              <p>6 Month Course - SDLC Dindigul</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Passionate and self-motivated MERN Stack Developer with a strong
              foundation in MongoDB, Express.js, React, and Node.js. Skilled in
              building responsive and user-friendly web applications using HTML,
              CSS, JavaScript, Bootstrap, and Tailwind CSS. Experienced in
              developing and integrating RESTful APIs for scalable applications.
              Eager to contribute to real-world projects and continuously grow
              as a full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
