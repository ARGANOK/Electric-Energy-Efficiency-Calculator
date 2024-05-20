export default function handleDelete(){
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