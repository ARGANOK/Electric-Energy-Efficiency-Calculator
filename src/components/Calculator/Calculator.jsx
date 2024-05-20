

import React, { Fragment, useEffect, useState } from "react";
import Inputs from "./input.jsx";
import './Calculator.css'
import { getStoredCalculations, addCalculation, removeLastCalculation, getLastAdded, checkUsageEfficiency } from "./StorageOfInputs";
import NavigationBar from "../navBar.jsx";
import { getApplianceData, updateApplianceData } from './Totalappliance.jsx';
import Footer from "../Footer.jsx";
import PerformCalculation from "./PerformCalculations.jsx"

export default function mainCalculator() {
    const [inputno, setinputno] = useState(0);
    const [sections, setSections] = useState([]);
    const [calculations, setCalculations] = useState([]);

    const {handleCalculation, 
            handleDelete , 
            handleEfficiencyCheck
        } = PerformCalculation(inputno, setinputno, sections, setSections, calculations, setCalculations )
    return (
        <div className="">
            <NavigationBar />
            <div className="w-[100%] h-[100%] flex gap-7 ml-[2%] mt-3 items-center justify-center overflow-x-hidden leading-4 mb-10" id="input-holder">
                <button className="flex justify-center items-center bg-red-500 text-white p-5 rounded-lg" onClick={handleEfficiencyCheck}>Check Efficiency</button>
                <Inputs inputvalue={1} onCalculate={handleCalculation} onDelete={handleDelete} calculations={calculations} />
                <div className="bg-white w-[max-content] p-5 rounded-lg">
                    <h2>Stored Calculations</h2>
                    <ul>
                        {calculations.map((calculation, index) => (
                            <li key={index} className="overflow-hidden">
                                <br />
                                <strong>Input No:</strong> {calculation.inputNo}<br />
                                <strong>Appliance:</strong> {calculation.appName}<br />
                                <strong>Result:</strong> {calculation.result}
                                <br />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
