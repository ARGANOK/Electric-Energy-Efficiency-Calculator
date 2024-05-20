import React from "react";
// import Inputs from "../InputNo.jsx";
import Inputs from "../input"
import { useState } from "react";
import PerformCalculation from "../PerformCalculations"


const mainPart = ()=>{
    const [inputno, setinputno] = useState(0);
    const [sections, setSections] = useState([]);
    const [calculations, setCalculations] = useState([]);
    const {handleCalculation, 
            handleDelete , 
            handleEfficiencyCheck
        } = PerformCalculation(inputno, setinputno, sections, setSections, calculations, setCalculations )
    return(
        <div className="">
            <div className=" bg-zinc-800 h-1/2 w-[max-content] ml-2 flex-col justify-center items-center p-2 rounded-lg  ">
                <div className=" flex text-center justify-center items-center text-white m-4">Kitchen</div>
                <Inputs className="items-center ml-auto mr" inputvalue={1} onCalculate={handleCalculation} onDelete={handleDelete} calculations={calculations} />
            </div>
            {/* <input type="text" /> */}
        </div>
    )
}
export default mainPart