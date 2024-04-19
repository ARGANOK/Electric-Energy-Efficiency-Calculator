import React,{Fragment , useState} from "react";
import Inputs from "./input.jsx";
// import NewSection from './newSection.jsx'

export default function mainCalculator(){
    const [inputHrValue , setHrValue] = useState();
    function onChange(){
        setHrValue(inputHrValue);
    }
    const [sections, setSections] = useState([]);
    function addSection(){
        setSections(prevSections => [...prevSections, <Inputs key={prevSections.length} />]);
    }
    return (
        <Fragment className="bg-slate-600">
            <div className="flex items-center justify-center gap-7 w-[90vw] flex-wrap">
                {/* input 1 */}
                {/* <Inputs /> */}
                {sections}
                
            </div>
                <button onClick={addSection}>Add a Section</button>
        </Fragment>
    )
}