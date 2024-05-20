import React from "react";


export default function CalculationFunctions({ inputno, setinputno, sections, setSections, calculations, setCalculations }) {
    
    const handleCalculation = ({ appName, result }) => {
        setCalculations([...calculations, { inputNo: inputno, appName, result }]);
        setinputno(inputno + 1);
    }

    const handleDelete = () => {
        removeLastCalculation();
        setinputno(inputno - 1);
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

    const handleEfficiencyCheck = () => {
        const efficiencyResult = checkUsageEfficiency(calculations);
        if (typeof efficiencyResult === 'string') {
            alert(efficiencyResult);
        } else {
            alert(`Your appliance ${efficiencyResult.appName} is consuming the most power with a usage of ${efficiencyResult.maxResult}.`);
        }
    }

    return {
        handleCalculation,
        handleDelete,
        handleEfficiencyCheck
    };
}