import { useState } from "react";
import { getUnitsData } from "../data/unitsData";
import CalculateField from "./CalculateField";
export default function ConverterField() {
   const [selected,setSelected] = useState('Length');
   const allUnitsData = getUnitsData();
   const unitCategories = Object.keys(allUnitsData)

   
    return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-gradient-to-br from-slate-950 via-black to-gray-950 pt-4">
       <div className="w-[800px] bg-gray-800 shadow-md px-3 py-8 mx-auto rounded-md">
            <h2 className="text-xl font-semibold text-white">Unit Converter</h2>
                <select className="border w-full mt-3 mb-5 p-2 outline-none" onChange={(e)=>setSelected(e.target.value)} value={selected}>
                    {
                        unitCategories.map(unit => <option key={allUnitsData[unit].id} value={allUnitsData[unit].unitName}>{allUnitsData[unit].unitName}</option>)
                    }
               
                </select>
                
                <CalculateField key={allUnitsData[selected.toLowerCase()].id} selectedItems={selected.toLowerCase()} units={allUnitsData[selected.toLowerCase()].units} data = {allUnitsData}/>
               
        
       </div>
    </div>  
    );
}