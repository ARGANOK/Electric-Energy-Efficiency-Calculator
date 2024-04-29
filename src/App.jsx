import './App.css'
// import NavigationBar from './components/navBar.jsx'
// import MainPart from "./components/"
import React from "react";
import Calculator from "./components/Calculator/Calculator"
import NavigationBar from "./components/navBar";
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstSection from './components/section-1';
import AboutUs from './components/AboutUs';
import Dashboard from './components/DashBoard';


function App() {


  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FirstSection />} />
          <Route path="/Calculator" element={<Calculator />} />
          {/* Add routes for other sections here */}
          <Route path="/DashBoard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/main" element={<FirstSection />} />
        </Routes>
      </div>
        {/* <Routes> */}
        {/* </Routes> */}
    </Router>
    </>
  )
}

export default App
