import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ArrowPathIcon
} from "@heroicons/react/24/solid";
import { useDataTable } from "../../../contexts/DataTableContext";

const DateFilter = ({ filterName }) => {
  const { setFilter, setFilterReset } = useDataTable();
  const [selectedDate, setSelectedDate] = useState("");
  

  const onChange = (e) => {
    setSelectedDate(e.target.value);
    if (e.target.value === "") {
      setFilterReset();
    }
  };

  const handleFilter = () => {
    if (selectedDate === "") {
      setFilterReset();
    } else {
      setFilter(filterName, selectedDate);
    }
  };

  const handleFilterReset = () => {
    setFilterReset();
    setSelectedDate("");
  };

  return (
    <div className="flex justify-between items-center">
      <input
        type="date"
        className="form-control"
        value={selectedDate}
        onChange={onChange}
      />
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

export default DateFilter;
