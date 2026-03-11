import React from "react";

import project1 from "../assets/E-com-img.jpg";
import project2 from "../assets/portimg.jpg";

function Project() {
  return (
    <div>

      {/* Heading */}
      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">Browse My Recent</p>
        <h1 className="text-4xl font-semibold mt-3">Projects</h1>
      </div>

      {/* Main */}
      <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center p-5">

        {/* Card 1 */}
        <div className="max-w-sm p-6 border border-gray-600 rounded-3xl text-center hover:scale-105 transition duration-300">

          <img
            className="w-full rounded-2xl h-56 object-cover"
            src={project1}
            alt="Ecommerce project"
          />

          <h1 className="text-xl font-semibold md:text-2xl py-4">
            E-Commerce Website
          </h1>

          <div className="flex justify-center gap-4">

            <a
              className="border px-4 py-2 rounded-xl hover:bg-black hover:text-white"
              href="https://github.com/Vasanth-kr/Js-Ecommerce-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              className="border px-4 py-2 rounded-xl hover:bg-black hover:text-white"
              href="https://vasanth-kr.github.io/Js-Ecommerce-Website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm p-6 border border-gray-600 rounded-3xl text-center hover:scale-105 transition duration-300">

          <img
            className="w-full rounded-2xl h-56 object-cover"
            src={project2}
            alt="Portfolio project"
          />

          <h1 className="text-xl font-semibold md:text-2xl py-4">
            Portfolio Website
          </h1>

          <div className="flex justify-center gap-4">

            <a
              className="border px-4 py-2 rounded-xl hover:bg-black hover:text-white"
              href="https://github.com/Vasanth-kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              className="border px-4 py-2 rounded-xl hover:bg-black hover:text-white"
              href="https://portfolio-gray-nine-91.vercel.app/project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Project;