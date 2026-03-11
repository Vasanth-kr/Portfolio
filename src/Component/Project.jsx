import React from "react";

function Project() {
  return (
    <div>
      {/* Heading */}

      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">Browse My Recent</p>
        <h1 className="text-4xl font-semibold mt-3">Projects</h1>
      </div>

      {/* Main */}

      <div className="w-full grid gap-5 grid-cols-1 justify-items-center p-5 lg:grid-cols-2">
        {/* Card-1 */}

        <div className="w-70 h-auto p-5 md:w-100 md:p-7 lg:p-10 border border-gray-600 rounded-4xl text-center ">
          <img
            className="w-full rounded-4xl h-50 md:h-70 object-cover"
            src="src\assets\E-com-img.jpg"
            alt=""
          />
          <h1 className="text-xl font-semibold md:text-2xl py-4">
            E-Commere's
          </h1>
          <div className="flex justify-center gap-5">
            <a
              className="border px-2 py-2 md:px-4 md:py-4 rounded-xl hover:bg-black hover:text-white cursor-pointer"
              href="https://github.com/Vasanth-kr/Js-Ecommerce-Website"
            >
              GitHub
            </a>

            <a
              className="border px-2 py-2 rounded-xl md:px-4 md:py-4 hover:bg-black hover:text-white cursor-pointer"
              href="https://vasanth-kr.github.io/Js-Ecommerce-Website/"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Card-2 */}

        <div className="w-70 h-auto p-5 md:w-100 md:p-7 lg:p-10 border border-gray-600 rounded-4xl text-center ">
          <img
            className="w-full rounded-4xl h-50 md:h-70 object-cover"
            src="src\assets\Profile-img.jpg"
            alt=""
          />
          <h1 className="text-xl font-semibold md:text-2xl py-4">
            Portfolio
          </h1>
          <div className="flex justify-center gap-5">
            <a
              className="border px-2 py-2 md:px-4 md:py-4 rounded-xl hover:bg-black hover:text-white cursor-pointer"
              href="https://github.com/Vasanth-kr/Js-Ecommerce-Website"
            >
              GitHub
            </a>

            <a
              className="border px-2 py-2 rounded-xl md:px-4 md:py-4 hover:bg-black hover:text-white cursor-pointer"
              href="https://vasanth-kr.github.io/Js-Ecommerce-Website/"
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
