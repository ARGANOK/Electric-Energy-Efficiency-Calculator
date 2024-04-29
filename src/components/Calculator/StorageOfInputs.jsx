// CalculationStorage.jsx
import React from "react";

const CalculationStorage = ({ calculations }) => {
  return (
    <div>
      <h2>Stored Calculations</h2>
      <ul>
        {calculations.map((calculation, index) => (
          <li key={index}>
            Input No: {calculation.inputNo}, Appliance: {calculation.appName}, Result: {calculation.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculationStorage;