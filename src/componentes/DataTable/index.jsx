import React, { useMemo } from "react";
import PerPage from "./PerPage";
import SearchMain from "./SearchMain";
import Pagination from "./Pagination";
import FiltersMain from "./FiltersMain";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  
} from "react-table";

const DataTable = ({data,total,COLUMNS,FILTERS_COL}) => {

  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    setGlobalFilter,
    headerGroups,
    page,
    state,
    pageCount,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { 
        pageIndex: 0,
      },
      manualPagination: true,
      pageCount: total,
    },
    useGlobalFilter,
    usePagination
  );
  const { globalFilter, pageIndex } = state;
  return (
    <div className="table-area">
            <div className="header">
            <div className="table-header">
        <div className="flex items-center px-4 py-1">
        <PerPage />
        </div>
        <div className="flex items-center px-4 py-1">
        <SearchMain filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className="flex  ">
        <FiltersMain FILTERS_COL={FILTERS_COL}/>
        </div>
        </div>
            </div>
             <div className="body">
     
                <table
                className="min-w-full mt-4"
                {...getTableProps()}
              >
                <thead className="bg-slate-200 ">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column,index) => (
                        <th
                         key={index}
                          scope="col"
                          className="table-th"
                        >
                          {column.render("Header")}
                  
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-white divide-y divide-slate-100"
                  {...getTableBodyProps()}
                >
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()} className="table-td">
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
    
            </div>
            <div className="footer">
            <div className="flex justify-center mt-6 items-center">
        <Pagination 
        canPreviousPage = {canPreviousPage}
        previousPage = {previousPage}
        gotoPage = {gotoPage}
        pageIndex = {pageIndex}
        pageOptions = {pageOptions}
        canNextPage = {canNextPage}
        pageCount= {pageCount}
        nextPage = {nextPage}/>
      </div>
              </div>
              </div>
  );
};

export default DataTable;
