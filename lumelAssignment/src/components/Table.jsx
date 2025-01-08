import React from "react";
import TableRow from "./TableRow";

const Table = ({
  data,
  onPercentageChange,
  onValueChange,
  calculateVariance,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2  text-center">Label</th>
            <th className="border border-gray-300 p-2  text-center">Value</th>
            <th className="border border-gray-300 p-2  text-center">Input</th>
            <th className="border border-gray-300 p-2  text-center">
              Allocation %
            </th>
            <th className="border border-gray-300 p-2  text-center">
              Allocation Val
            </th>
            <th className="border border-gray-300 p-2  text-center">
              Variance %
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              row={row}
              rowPath={[index]}
              onPercentageChange={onPercentageChange}
              onValueChange={onValueChange}
              calculateVariance={calculateVariance}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
