import React , {useState} from "react";
import Inputs from "../input"
import { removeLastCalculation , getLastAdded , checkUsageEfficiency  } from "../StorageOfInputs.jsx";
import { getApplianceData, updateApplianceData } from '../Totalappliance.jsx';
import "./Kitchen.css"


const mainPart = ({name , image , ans})=>{

    const value = {

        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // width: '100%',
        // height: '400px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

    const [inputno , setinputno] = useState(1);
    const [sections, setSections] = useState([]);
    const [calculations, setCalculations] = useState([]);
    function handleCalculation({ appName, result }) {
        setCalculations([...calculations, { inputNo: inputno, appName, result}]);
        setinputno(inputno + 1);
    }
    function handleDelete(){
        removeLastCalculation();
        setinputno(inputno-1);
        const updatedCalculations = [...calculations];
        updatedCalculations.pop(); // Remove the last calculation from the UI
        setCalculations(updatedCalculations);
        const data = getLastAdded();
        console.log(`last added value ${data}`)
        const result = getApplianceData(data);
        console.log(`printing the result ${result}`)
        let val = parseInt(result) - 1;
        console.log(`to be updated value ${val}`);
        updateApplianceData(data, val); // Update applianceData directly
        console.log(data.appName, val);
    }
    function handleEfficiencyCheck() {
        const efficiencyResult = checkUsageEfficiency(calculations);
        if (typeof efficiencyResult === 'string') {
            alert(efficiencyResult);
        } else {
            alert(`Your appliance ${efficiencyResult.appName} is consuming the most power with a usage of ${efficiencyResult.maxResult}.`);
        }
    }

    return(
        <div style={value} className=" m-3 rounded-lg">
            <div id="container" className=" w-[max-content] flex-col justify-center items-center px-10 rounded-lg  ">
                <div className=" flex text-center justify-center items-center text-white m-4 text-2xl">{name}</div>
                <div className=" w-[100%] h-[100%] flex gap-7 ml-[2%] mt-3 items-center justify-center overflow-x-hidden leading-4 mb-10" id="input-holder">
                    <div className="">
                        <button className="flex justify-center items-center bg-red-500 text-white p-5 rounded-lg mb-2" onClick={handleEfficiencyCheck}>Check Efficiency</button>
                        <div className="bg w-[max-content] rounded-lg">

                        <ul className="text-black bg-white p-3 rounded-lg">
                            <h2 className="text-black">Stored Calculations:</h2>
                            {calculations.map((calculation, index) => (
                            <li key={index} className=" overflow-hidden">
                            {/* <strong>Input No:</strong>  */}
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
                    <Inputs inputvalue={1} onCalculate={handleCalculation} onDelete={handleDelete} calculations={calculations} list = {ans}  />
                </div>
            </div>
            {/* <input type="text" /> */}
        </div>
    )
}
export default mainPart