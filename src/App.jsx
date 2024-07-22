import React from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Project from "./components/project/Project";

function App() {
  return (
    <div>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Project/>} />
          
        </Routes>
  
    </div>
  );
}

export default App;
