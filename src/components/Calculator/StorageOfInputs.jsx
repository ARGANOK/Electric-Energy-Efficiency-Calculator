const storedCalculations = [];
const lastAdded = [];
import { useState } from 'react';
import { getApplianceData, updateApplianceData } from './Totalappliance.jsx';

export function addCalculation(appName, result, inputNo) {
    const [Sum , setSum] = useState(0);
    storedCalculations.push({ appName, result, inputNo });
    setSum(Sum + parseInt(result))
  }
 export function addLastAdded(name){
    console.log("last Added")
    lastAdded.push(name);
 }
export function removeLastCalculation() {
  const x = storedCalculations.pop(); // Remove the last calculation from storage
  
}
export function printAll(){
  console.log(lastAdded.at(lastAdded.length-1));
}
export function getLastAdded(){
  return lastAdded.pop();
}
export function getStoredCalculations() {
    return storedCalculations;
}
export function checkUsageEfficiency(calculations) {
  let storedSum = 0;
  let maxResult = 0;
  let maxAppName = '';

  calculations.forEach(calculation => {
      const result = parseInt(calculation.result, 10);
      storedSum += result;
      if (result > maxResult) {
          maxResult = result;
          maxAppName = calculation.appName;
      }
  });

  if (storedSum > 300) {
      return { appName: maxAppName, maxResult };
  } else {
      return "You are using your appliances efficiently.";
  }
}