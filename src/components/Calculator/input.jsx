
import './Calculator.css'
import React , { Fragment, useEffect, useState  } from "react";
import { addCalculation } from "./StorageOfInputs";
import {getLastAdded , addLastAdded , printAll} from "./StorageOfInputs";
import Inputno from "./Calculator"
import { getApplianceData, updateApplianceData } from './Totalappliance.jsx';


export default function inputs({inputvalue, onCalculate , calculations , onDelete }){
        const [appName, setAppName] = useState("");
        const [power, setPower] = useState("");
        const [hour, setHour] = useState("");
        const [inputNo , setInputNo] = useState(inputvalue);
        const [value , setValue] = useState(0);
        const [lastAddedName , setLastAddedName] = useState('');
        const HandleName = (event)=>{
            setAppName(event.target.value);
        };
        const HandlePower = (event)=>{
            setPower(event.target.value);
        }
        const HandleHour = (event)=>{
            setHour(event.target.value);
        }
        const Calculate = () => {
            const powervalue = parseFloat(power);
            const hourvalue = parseFloat(hour);
            if (powervalue === null || hourvalue === null) {
              alert("Please enter valid numbers");
            } else {
                const result = powervalue * hourvalue;                    
                let data = getApplianceData(appName)
                let x = parseInt(data) + 1;
                updateApplianceData(appName , x)
                console.log(appName)
                addLastAdded(appName)
                // console.log(printAll)
                console.log(typeof(parseInt(x)))
                onCalculate({ appName: appName+" "+x, result });
            }
          };
        const Delete = () => {
            setInputNo(inputNo - 1);
            console.log(inputNo);
            onDelete()
            // let x = getLast();
            // let data = getApplianceData(x);
            // let z = parseInt(data)-1;
            // updateApplianceData[z]

        }
         

        return(
            <div className='flex flex-col justify-center h-[max-content] w-[max-content] items-center'>
            <div className=" flex flex-col justify-center items-center bg-white bg-opacity-50 rounded-lg p-5 card" >
                {/* input for the Appliance Name */}
                <div className=' m-6 bg-slate-400 p-3 rounded-xl text-white'>Input Your Values </div>
                <select name="" id="" className=" h-8 w-40 text-center" onChange={HandleName}>
                    <option value="">Select Appliance</option>
                    <option value="Television">Television</option>
                    <option value="Air Conditioner">Air Conditioner</option>
                    <option value="Freezer">Freezer</option>
                    <option value="Refrigerator">Refrigerator</option>
                    <option value="MicroWave Oven">MicroWave Oven</option>
                    <option value="Heater">Heater</option>
                    {/* <option value={inputs}></option> */}
                </select>
                <div className="flex flex-col">
                    <label for="Number" className="flex justify-center text-balance text-2xl">Power Consumption:</label>
                    <input type="Number" value={power} onChange={HandlePower} className=" h-10 w-56 text-center " />
                </div>
                <div className="flex flex-col">
                    <label for="number" className="flex justify-center text-2xl">Hours Usage:</label>
                    <input type="number" value={hour} onChange={HandleHour}  className=" h-10 w-56 text-center" min="0" max={24} />
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <button className=" bg-red-500 text-white rounded-lg mt-3 p-3" onClick={Calculate}>Calculate</button>
                    <button className='mt-3' onClick={Delete}>Delete</button>
                </div>
            </div>
            
        </div>
        
    )
}
