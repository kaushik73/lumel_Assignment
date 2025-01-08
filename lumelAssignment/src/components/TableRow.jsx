import React, { useState } from "react";
import NumberInput from "./NumberInput";
import PercentageButton from "./PercentageButton";
import ValueButton from "./ValueButton";

const TableRow = ({
  row,
  rowPath,
  onPercentageChange,
  onValueChange,
  calculateVariance,
  isChild = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="border border-gray-300 p-2 pl-4">
          {isChild && "--"}
          {row.label}
        </td>
        <td className="border border-gray-300 p-2">{row.value.toFixed(2)}</td>
        <td className="border border-gray-300 p-2">
          <NumberInput inputValue={inputValue} setInputValue={setInputValue} />
        </td>
        <td className="border border-gray-300 p-2  text-center">
          <PercentageButton
            inputValue={inputValue}
            rowPath={rowPath}
            onPercentageChange={onPercentageChange}
            setInputValue={setInputValue}
          />
        </td>
        <td className="border border-gray-300 p-2 text-center">
          <ValueButton
            inputValue={inputValue}
            rowPath={rowPath}
            onValueChange={onValueChange}
            setInputValue={setInputValue}
          />
        </td>
        <td className="border border-gray-300 p-2 text-center">
          {calculateVariance(row.value, row.originalValue).toFixed(2)}%
        </td>
      </tr>
      {row.children &&
        row.children.map((child, index) => (
          <TableRow
            key={index}
            row={child}
            rowPath={[...rowPath, index]}
            onPercentageChange={onPercentageChange}
            onValueChange={onValueChange}
            calculateVariance={calculateVariance}
            isChild={true}
          />
        ))}
    </>
  );
};

export default TableRow;
