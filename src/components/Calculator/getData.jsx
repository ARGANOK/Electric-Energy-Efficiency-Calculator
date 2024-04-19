import React ,{value} from "react";
function getData(){
    const data = {
        "Television":100,
        "Laptop":200,
        "Tablet":300,
        "Desktop":400,
        "Laptop PC":500,
        "Tablet PC":600,
    }
    return data.value;
}
export default  getData;