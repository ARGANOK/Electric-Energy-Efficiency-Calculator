import './App.css'
import React from "react";
import Calculator from "./components/Calculator/Testing.jsx"
import Login from "./components/Login.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstSection from './components/section-1';
import AboutUs from './components/AboutUs';
import Dashboard from './components/DashBoard';
import SwirlCursor from "./swirlcurl.jsx";


function App() {


  return (
    <>
    <Router>
      <div style={{position:'relative'}}>
        <SwirlCursor />

        <Routes>
          <Route path="/" element={<FirstSection />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/main" element={<FirstSection />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
