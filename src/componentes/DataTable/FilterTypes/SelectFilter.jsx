import React, {  useState } from "react";
import {
  MagnifyingGlassIcon,
  ArrowPathIcon
} from "@heroicons/react/24/solid";
import { useDataTable } from "../../../contexts/DataTableContext";

const SelectFilter = ({ filterName , filterOptions }) => {
  const { setFilter, setFilterReset } = useDataTable();
  const [selectedOption, setSelectedOption] = useState("");
  

  const onChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value === "") {
      setFilterReset();
    }
  };

  const handleFilter = () => {
    if (selectedOption === "") {
      setFilterReset();
    } else {
      setFilter(filterName, selectedOption);
    }
  };

  const handleFilterReset = () => {
    setFilterReset();
    setSelectedOption("");
  };

  return (
    <div className="flex justify-between items-center">
      <select
        className="form-control"
        value={selectedOption}
        onChange={onChange}
      >
        <option value="">Select an option</option>
        {filterOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        className="btn-base btn-success ml-3 mr-2"
        onClick={handleFilter}
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
      <button
        className="btn-base btn-warning ml-3 mr-2"
        onClick={handleFilterReset}
      >
        <ArrowPathIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SelectFilter;
