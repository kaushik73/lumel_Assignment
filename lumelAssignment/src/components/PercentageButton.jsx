import React from "react";

const PercentageButton = ({
  inputValue,
  rowPath,
  onPercentageChange,
  setInputValue,
}) => {
  const handlePercentageClick = () => {
    const percentage = parseFloat(inputValue);
    if (!isNaN(percentage)) {
      onPercentageChange(rowPath, percentage);
      setInputValue("");
    }
  };

  return (
    <button
      onClick={handlePercentageClick}
      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
    >
      %
    </button>
  );
};

export default PercentageButton;
