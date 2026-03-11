import React from "react";

import Html from "../assets/html.png";
import Css from "../assets/Css.png";
import Javascript from "../assets/java-script.png";
import Reactlogo from "../assets/reactimg.png";
import Tailwind from "../assets/Tailwind CSS.png";
import Bootstrap from "../assets/bootstrap.png";

function Skill() {
  return (
    <div>
      {/* Heading */}

      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">What I Know</p>
        <h1 className="text-4xl font-semibold mt-3">Skills</h1>
      </div>

      {/* Main */}

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center text-center p-5">

        <div className="max-w-xs p-5 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <img className="p-3" src={Html} alt="HTML logo" />
          <h1 className="text-xl font-semibold">HTML</h1>
        </div>

        <div className="max-w-xs p-5 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <img className="p-3" src={Css} alt="CSS logo" />
          <h1 className="text-xl font-semibold">CSS</h1>
        </div>

        <div className="max-w-xs p-5 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <img className="p-3" src={Javascript} alt="JavaScript logo" />
          <h1 className="text-xl font-semibold">JavaScript</h1>
        </div>

        <div className="max-w-xs p-5 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <img className="p-3" src={Reactlogo} alt="React logo" />
          <h1 className="text-xl font-semibold">React</h1>
        </div>

        <div className="max-w-xs p-5 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <img className="p-3" src={Tailwind} alt="Tailwind logo" />
          <h1 className="text-xl font-semibold">Tailwind CSS</h1>
        </div>

        <div className="max-w-xs p-5 rounded-xl shadow-xl hover:scale-105 transition duration-300">
          <img className="p-3" src={Bootstrap} alt="Bootstrap logo" />
          <h1 className="text-xl font-semibold">Bootstrap</h1>
        </div>

      </div>
    </div>
  );
}

export default Skill;