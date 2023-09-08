import React,{ useState} from "react";
import { MagnifyingGlassIcon ,ArrowPathIcon} from '@heroicons/react/24/solid'
import { useDataTable } from '../../../contexts/DataTableContext';

const TextFilter = ({ filterName }) => {
  const { setFilter,setFilterReset } = useDataTable();
  const [searchValue,setSearchValue] = useState("");

const onChange = (e) => {
  setSearchValue(e.target.value);
  if(e.target.value === '') {
    setFilterReset();
  }
}
  const handleFilter = () => {
    if (searchValue === '') {
      setFilterReset();
    } else {
      setFilter(filterName,searchValue);
    }
  }
  const handleFilterReset = () => {
      setFilterReset();
      setSearchValue('');
  }
  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        className="form-control"
        value={searchValue} 
        onChange={onChange}
        placeholder="Search..."
      />
      <button className="btn-base btn-success ml-3 mr-2"
      onClick={handleFilter}
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
      <button className="btn-base btn-warning ml-3 mr-2"
      onClick={handleFilterReset}
      >
        <ArrowPathIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TextFilter;
