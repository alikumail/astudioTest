import React, { useState } from "react";
import { XCircleIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'



const SearchMain = ({ filter, setFilter }) => {
  const [showSearch,setShowSearch]  = useState(false);
  const [value, setValue] = useState(filter);
  const onChange = (e) => {
    setValue(e.target.value);
    setFilter(e.target.value || undefined);
  };
  return (
    <div className="flex justify-between items-center">
          <div className="table-header-search">
            {showSearch &&
           (
            <div>
            <input type="text" className="form-control"
              value={value || ""}
              onChange={onChange}
              placeholder="Search..."
            />
          </div>
           ) }
          </div>
          <div className="icon-area cursor-pointer mr-2"
          onClick={() => setShowSearch(!showSearch)}
          >
          {showSearch ? <XCircleIcon className="h-6 w-6" /> : <MagnifyingGlassIcon className="h-6 w-6" />}
          </div>
    </div>
  );
};

export default SearchMain;
