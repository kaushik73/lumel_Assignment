import React from "react";
import { useTableLogic } from "./hooks/useTableLogic";
import { initialState } from "./data/initialState";
import Table from "./components/Table";

const App = () => {
  const { data, updateByPercentage, updateByValue, calculateVariance } =
    useTableLogic(initialState);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Hierarchical Table with Allocation
      </h1>
      <Table
        data={data}
        onPercentageChange={updateByPercentage}
        onValueChange={updateByValue}
        calculateVariance={calculateVariance}
      />
    </div>
  );
};

export default App;
