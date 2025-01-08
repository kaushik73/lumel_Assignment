import React from "react";
const NumberInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      type="number"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="border border-gray-300 rounded p-1 w-20"
      placeholder="Enter value"
    />
  );
};

export default NumberInput;
