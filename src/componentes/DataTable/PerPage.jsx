import React from "react";
import { useDataTable } from '../../contexts/DataTableContext';


const PerPage = () => {
  const { limit,setLimit } = useDataTable();
  return (
    <>

        <div className="flex items-center justify-between">
        <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
            >
              {[5,10, 20, 50].map((limit) => (
                <option key={limit} value={limit}>
                 {limit}
                </option>
              ))}
            </select>
            <div className="ml-2">Entries</div>
        </div>
    </>
  );
};

export default PerPage;
