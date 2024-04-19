import { Fragment } from "react";

export default function inputs(){
    return(
        <>
            <div className="h-[100vh] flex flex-col justify-center items-center">
                {/* input for the Appliance Name */}
                <select name="" id="" className=" h-8 w-40 text-center">
                    <option value={()=>handleMinMax("Television")}>Television</option>
                    <option value="Air Conditioner">Air Conditioner</option>
                    <option value="Freezer">Freezer</option>
                    <option value="Refrigerator">Refrigerator</option>
                    <option value="MicroWave Oven">MicroWave Oven</option>
                    <option value="Heater">Heater</option>
                </select>
                <div className="flex flex-col">
                    <label for="Number" className="flex justify-center text-2xl">Power Consumption:</label>
                    <input type="Number" className=" h-10 w-56 text-center " />
                </div>
                <div className="flex flex-col">
                    <label for="number" className="flex justify-center text-2xl">Hours Usage:</label>
                    <input type="number" className=" h-10 w-56 text-center" min="0" max={24} />
                </div>
            </div>
        </>
    )
}