import React from "react";

// import Myprofile from './assets/my-pic.png'

function Home() {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row justify-center gap-10 w-full h-screen ">
        <div className="">
          <img
            className="w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100 border rounded-full object-cover"
            src="src\assets\profile.jpeg"
            alt=""
          />
        </div>

        <div className="mt-3 text-center">
          <p className="text-gray-600 font-semibold text-md lg:text-xl">Hello I'm</p>
          <h2 className=" text-3xl md:text-3xl lg:text-5xl md:font-semibold pt-3">
            Vasantha Kumar
          </h2>
          <h5 className="md:text-2xl lg:text-3xl text-gray-600 font-medium pt-2">
            Fronded Developer
          </h5>

          <div className="mt-3 [&>button:nth-child(1)]:m-3">
            <button className="border px-3 py-3 rounded-xl hover:bg-black hover:text-white cursor-pointer">Dowload Cv</button>

            <button className="border px-3 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black cursor-pointer">
              Contact Info
            </button>

            <div className="[&>a:nth-child(1)]:m-3 mt-3">
              <a className="text-3xl cursor-pointer"  href="https://www.linkedin.com/in/vasantha-kumar-kv/"><i class="fa-brands fa-linkedin-in"></i></a>
              <a className="text-3xl cursor-pointer" href="https://github.com/"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
