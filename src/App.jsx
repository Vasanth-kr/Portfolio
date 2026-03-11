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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;