import { useState } from "react";

export const useTableLogic = (initialData) => {
  const initializeOriginalValues = (rows) =>
    rows.map((row) => ({
      ...row,
      originalValue: row.originalValue ?? row.value,
      children: row.children
        ? initializeOriginalValues(row.children)
        : undefined,
    }));

  const [data, setData] = useState(() => initializeOriginalValues(initialData));

  const updateByPercentage = (rowPath, percentage) => {
    setData((prevData) =>
      updateNestedRow(prevData, rowPath, (row) => {
        row.value = parseFloat((row.value * (1 + percentage / 100)).toFixed(2));
      })
    );
  };

  const updateByValue = (rowPath, newValue) => {
    setData((prevData) =>
      updateNestedRow(prevData, rowPath, (row) => {
        if (row.children) {
          const currentTotal = row.children.reduce(
            (sum, child) => sum + child.value,
            0
          );

          if (currentTotal > 0) {
            row.children.forEach((child) => {
              const currentContribution = child.value / currentTotal;
              child.value = parseFloat(
                (newValue * currentContribution).toFixed(2)
              );
            });
          }
        }

        row.value = newValue;
      })
    );
  };

  const calculateVariance = (value, originalValue) =>
    originalValue === 0
      ? 0
      : parseFloat(
          (((value - originalValue) / originalValue) * 100).toFixed(2)
        );

  const updateNestedRow = (rows, rowPath, updater) => {
    const [currentIndex, ...restPath] = rowPath;

    if (restPath.length === 0) {
      updater(rows[currentIndex]);
    } else {
      rows[currentIndex].children = updateNestedRow(
        rows[currentIndex].children,
        restPath,
        updater
      );
    }

    if (rows[currentIndex].children) {
      rows[currentIndex].value = rows[currentIndex].children.reduce(
        (sum, child) => sum + child.value,
        0
      );
    }

    return [...rows];
  };

  return {
    data,
    updateByPercentage,
    updateByValue,
    calculateVariance,
  };
};
