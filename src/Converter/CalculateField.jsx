import { useState } from "react";

export default function CalculateField({ selectedItems, units, data }) {
  const [leftSelect, setLeftSelect] = useState(units[0]);
  const [rightSelect, setRightSelect] = useState(units[1]);
  const [leftInputValue, setLeftInputValue] = useState(0);
  const [rightInputValue, setRightInputValue] = useState(0);
  const [flow, setFlow] = useState("right");
  

  const variantsName = flow === "right" ? leftSelect + rightSelect : rightSelect + leftSelect;
  console.log(variantsName)
  let selectedVariants = data[selectedItems].variants[variantsName];


  function handleChange(value, side) {
    let variants;

    if (side === "leftselect") {
      if (value === rightSelect) {
        setRightSelect(leftSelect);
        setLeftSelect(value);
        variants = flow === "right" ? value + leftSelect : leftSelect + value;
      } else {
        setLeftSelect(value);
        variants = flow === "right" ? value + rightSelect : rightSelect + value;
      }
    } else {
      if (value === leftSelect) {
        setRightSelect(value);
        setLeftSelect(rightSelect);
        variants = flow === "right" ? rightSelect + value : value + rightSelect;
      } else {
        setRightSelect(value);
        variants = flow === "right" ? leftSelect + value : value + leftSelect;
      }
    }

    let selectedVariants = data[selectedItems].variants[variants];
    let output = selectedVariants.calculation(flow === "right" ? leftInputValue : rightInputValue);
    flow === "right" ? setRightInputValue(output) : setLeftInputValue(output);
  }

  function handleInputChange(value, side) {
    if (side === "leftinput" && !isNaN(value)) {
      setLeftInputValue(value);
      let output = selectedVariants.calculation(value);
      setRightInputValue(output);
    }
    if (side === "rightinput" && !isNaN(value)) {
      setRightInputValue(value);
      let output = selectedVariants.calculation(value);
      setLeftInputValue(output);
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        {/* Left Input and Select */}
        <div className="w-1/2">
          <input
            onChange={(e) => handleInputChange(e.target.value, "leftinput")}
            onFocus={() => setFlow("right")}
            value={leftInputValue}
            className={
              flow === "right"
                ? "border-yellow-600 e-950 outline-none px-2 text-2xl w-full h-16"
                : "border-yellow-600 border-t-4 outline-none px-2 text-2xl w-full h-16"
            }
            type="text"
          />
          <select
            onChange={(e) => handleChange(e.target.value, "leftselect")}
            value={leftSelect}
            className="border w-full mt-3 mb-5 p-2 outline-none"
          >
            {units.map((unit, index) => (
              <option key={index} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        {/* Equals Sign */}
        <p className="text-3xl self-center text-yellow-500"> = </p>

        {/* Right Input and Select */}
        <div className="w-1/2">
          <input
            onChange={(e) => handleInputChange(e.target.value, "rightinput")}
            onFocus={() => setFlow("left")}
            value={rightInputValue}
            className={
              flow === "left"
                ? "border-yellow-600 outline-none px-2 text-2xl w-full h-16"
                : "border-yellow-600 border-t-4 outline-none px-2 text-2xl w-full h-16"
            }
            type="text"
          />{" "}
          <select
            onChange={(e) => handleChange(e.target.value, "rightselect")}
            value={rightSelect}
            className="border w-full mt-3 mb-5 p-2 outline-none"
          >
            {units.map((unit, index) => (
              <option key={index} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Formula Display */}
      {
        <p>
          <span className="bg-yellow-600 p-1 rounded-sm mr-2 text-white">Formula: </span>
           <span className="text-white">{data[selectedItems].variants[variantsName]?.formula}</span>
        </p>
      }
    </div>
  );
}
