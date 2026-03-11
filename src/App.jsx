import React from "react";
import Navbar from "./Component/Navbar";
import Skill from "./Component/Skill"; 
import About from "./Component/About";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Home from "./Component/Home";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
