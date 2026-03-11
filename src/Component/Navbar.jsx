import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

 const [toggleMenu,setToggleMenu]= useState(false);

  return (
    <header className="flex font-thin justify-between px-3 shadow-md md:justify-evenly bg-white w-full h-20 items-center text-black">
      <div>
        <h1 className="font-medium text-3xl">Vasanth</h1>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-10 text-xl font-normal ">
          <li className="hover:text-gray-600" id="home">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-600" id="about">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/project">Project</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/skill">Skill</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {toggleMenu && <nav className="block md:hidden fixed bg-white top-20 right-0 w-50">
        <ul className="flex flex-col gap-5 px-5  py-5 text-xl font-normal ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>}

      <div className="md:hidden">
        <button onClick={()=>setToggleMenu(!toggleMenu)} className="text-2xl">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
