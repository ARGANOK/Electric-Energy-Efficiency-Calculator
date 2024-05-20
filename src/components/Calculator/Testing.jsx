import React,{ useState} from "react";
import Inputs from "./input.jsx";
import './Testing.css'
import { removeLastCalculation , getLastAdded , checkUsageEfficiency  } from "./StorageOfInputs";
import NavigationBar from "../navBar.jsx";
import { getApplianceData, updateApplianceData } from './Totalappliance.jsx';
import Footer from "../Footer.jsx";
import MainPart from "./furtherSection/Kitchen.jsx"
import MainPart1 from "./furtherSection/Bedroom.jsx"
import MainPart2 from "./furtherSection/LivingRoom.jsx"
import kitchen from "./furtherSection/image1.jpg"
import Livingroom from "./furtherSection/Livingroom.jpg"
import bedroom from "./furtherSection/bedroom.jpg"




// import Inputno, { inputno, setInputNo } from "."
// import NewSection from './newSection.jsx'

export default function mainCalculator(){
    const values=[
        "Freezer","Chimney","Oven","MicroWave","DishWasher","Refrigerator"
    ]
    const values1 = ["Television" , "Space Heater" , "Air Conditioner" , "Home Theater" , "Consoles"]
    const values2 = ["Television" , "Space Heater" , "Air Conditioner" , "Home Theater" , "Consoles"]


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
    
    return (
        <div className="" >
            <NavigationBar/>
            <div className=" ">
                <div className="flex justify-center ">
                    <MainPart name={"Kitchen"} image={kitchen} ans={values}  />
                    <MainPart name={"Living Room"} image={Livingroom} ans={values1}  />
                </div>
                <MainPart className="py-5" name={"Bedroom"} image={bedroom} ans={values2}  />
            </div>

            <Footer />
        </div>
    )
}


{/* <div className=" w-[100%] flex gap-7 ml-[2%] mt-3 items-center justify-center overflow-x-hidden leading-4 mb-10" id="input-holder">
<button className="flex justify-center items-center bg-red-500 text-white p-5 rounded-lg" onClick={handleEfficiencyCheck}>Check Efficiency</button>
<Inputs inputvalue={1} onCalculate={handleCalculation} onDelete={handleDelete} calculations={calculations} />
<div className="bg-white w-[max-content] p-5 rounded-lg">
    <h2>Stored Calculations</h2>
    <ul>
      {calculations.map((calculation, index) => (
        <li key={index} className=" overflow-hidden">
          <br />
          <strong>Input No:</strong> {calculation.inputNo}<br />
          <strong>Appliance:</strong> {calculation.appName}<br />
          <strong>Result:</strong> {calculation.result}
          <br />
        </li>
      ))}
    </ul>
</div>
</div> */}