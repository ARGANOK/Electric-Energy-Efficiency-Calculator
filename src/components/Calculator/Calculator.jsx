import React,{Fragment , useEffect, useState} from "react";
import Inputs from "./input.jsx";
import NavBar from "../navBar.jsx"
import inputs from "./input.jsx";
import './Calculator.css'
import NavigationBar from "../navBar.jsx";
import BackgroundImage from '../../images/df0a3e2ec30abb1c92d145ef165b714f.gif'; // Import the background image
import Footer from "../Footer.jsx";


// import Inputno, { inputno, setInputNo } from "."
// import NewSection from './newSection.jsx'

export default function mainCalculator(){
    const [inputno , setinputno] = useState(2);
    const [sections, setSections] = useState([]);
    function addSection(){
            setinputno( inputno + 1),
            setSections(prevSections => [...prevSections, <Inputs inputvalue={inputno} />])
    }
    function handleCalculation({ appName, result }) {
        setCalculations([...calculations, { inputNo: inputno, appName, result }]);
    }
    return (
        <div  style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize:'cover' , height:`100%`}} >
        <NavigationBar/>
            <div className="w-[100%] flex justify-center my-4 mb-6"><button className=" bg-white p-3 rounded-3xl" onClick={addSection}>Add a Section</button></div>
        {/* <div> */}
            
        <div className=" w-[100%] h-[100%] grid  ml-[2%] mt-3 items-center overflow-x-hidden leading-4 mb-10" id="input-holder">
                {/* input 1 */}
                
                <Inputs inputvalue={1} />

                {sections }
        </div>
        {/* </div> */}
        <Footer />
        </div>
    )
}