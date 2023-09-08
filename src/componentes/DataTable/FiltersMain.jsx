import React, { useState,useEffect } from 'react';
import { ChevronDownIcon, XMarkIcon } from  '@heroicons/react/24/solid'; 
import { useDataTable } from '../../contexts/DataTableContext';
import TextFilter from './FilterTypes/TextFilter';
import SelectFilter from './FilterTypes/SelectFilter';
import DateFilter from './FilterTypes/DateFilter';


function FilterButton({ label, onClick }) {
  return (
    <li>
      <button className="flex justify-between items-center" onClick={onClick}>
        {label}
        <span className="ml-1">
          <ChevronDownIcon className="h-3 w-3" />
        </span>
      </button>
    </li>
  );
}

function FilterComponent({FILTERS_COL}) {
    const {setFilterReset } = useDataTable();
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');
  const [activeFilterLable, setActiveFilterLable] = useState('');
  const [activeFilterType, setActiveFilterType] = useState('');
  const [activeFilterOptions, setActiveFilterOptions] = useState([]);

  const handleFilterClick = (filterPara) => {

      setShowFilters(true);
      setActiveFilter(filterPara.filterName);
      setActiveFilterLable(filterPara.label);
      setActiveFilterType(filterPara.type);
      if (filterPara.type ==='select') {
        setActiveFilterOptions(filterPara.options)
      }

  };

  const handleResetFilter = () => {
    setShowFilters(false);
    setActiveFilter('');
    setActiveFilterLable("");
    setFilterReset();
  };

  useEffect(() => {
    setFilterReset();
  }, [activeFilter]);


  return (
    <div className="flex-col items-center px-4">
      <ul className="filters-list">
        {FILTERS_COL.map((filter) => (
          <FilterButton
            key={filter.filterName}
            label={filter.label}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </ul>
      {showFilters && (
        <div className="flex justify-start items-center mt-2">
          <label className="mr-3">{activeFilterLable} : </label>
          {activeFilterType === 'text'  && <TextFilter filterName={activeFilter} />}
          {activeFilterType ==='select' && <SelectFilter filterName={activeFilter} filterOptions={activeFilterOptions} />}
          {activeFilterType === 'date' && <DateFilter filterName={activeFilter} />}
          <div className="close-icon btn-base btn-danger ml-2" onClick={handleResetFilter}>
            <XMarkIcon className="h-5 w-5" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterComponent;
