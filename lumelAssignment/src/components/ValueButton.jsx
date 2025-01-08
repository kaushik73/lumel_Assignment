import React from "react";

const ValueButton = ({ inputValue, rowPath, onValueChange, setInputValue }) => {
  const handleValueClick = () => {
    const newValue = parseFloat(inputValue);
    if (!isNaN(newValue)) {
      onValueChange(rowPath, newValue);
      setInputValue("");
    }
  };

  return (
    <button
      onClick={handleValueClick}
      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
    >
      Val
    </button>
  );
};

export default ValueButton;
