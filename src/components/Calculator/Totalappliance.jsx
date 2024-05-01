let applianceData = {
    "Television": 0,
    "Air Conditioner": 0,
    "Freezer": 0,
    "Refrigerator": 0,
    "MicroWave Oven": 0,
    "Heater": 0,
  };
  
  export const getApplianceData = (name) => {
    return applianceData[name];
  };
  
  export const updateApplianceData = (applianceName, newValue) => {
    console.log(applianceName+" "+newValue)
    applianceData[applianceName] = newValue;

  };
