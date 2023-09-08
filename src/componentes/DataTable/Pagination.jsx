import React from "react";
import {ArrowLongLeftIcon,ArrowLongRightIcon} from '@heroicons/react/24/solid'
import { useDataTable } from '../../contexts/DataTableContext';


const Pagination = ({canPreviousPage,previousPage,gotoPage,pageIndex,pageOptions,canNextPage,pageCount,nextPage}) => {
  const { setPage } = useDataTable();
  return (
    <>
<ul className="flex items-center space-x-3">
  <li className="text-sm leading-4 text-black ">
    <button
      className={`${
        !canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => {
        previousPage()
        setPage(pageIndex-1);
      } }
      disabled={!canPreviousPage}
    >
        <ArrowLongLeftIcon className="h-6 w-6" />
    </button>
  </li>
  {pageIndex > 2 && (
    <>
      <li className="text-sm leading-4 text-black">
        <button onClick={() => {
          gotoPage(0)
          setPage(0);
        }} >
          1
        </button>
      </li>
        <li className="text-sm leading-4 text-black ">
          __
        </li>
    </>
  )}
  {pageOptions
    .slice(Math.max(0, pageIndex - 2), Math.min(pageOptions.length, pageIndex + 3))
    .map((page, pageIdx) => (
     
      <li key={pageIdx}>
        <button
          aria-current="page"
          className={`${
            page === pageIndex
              ? "mt-[-20px]"
              : "mt-0"
          } text-sm flex h-6 w-6  transition-all duration-150`}
          onClick={() => {
            gotoPage(page)
            setPage(page);
          }}
        >
          {page + 1}
        </button>
      </li>
    ))}
  {canNextPage && (
    <>
      {pageIndex < pageCount - 4 && (
        <li className="text-sm leading-4 text-black">
          __
        </li>
      )}
      <li className="text-sm leading-4 text-black">
        <button onClick={() => { 
          gotoPage(pageCount - 1);
          setPage(pageCount-1);

        }} disabled={!canNextPage}>
          {pageCount}
        </button>
      </li>
    </>
  )}
  <li className="text-sm leading-4 text-black">
    <button
      className={`${
        !canNextPage ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => {
        nextPage()
        setPage(pageIndex+1);
    }}
      disabled={!canNextPage}
    >
        <ArrowLongRightIcon className="h-6 w-6" />
    </button>
  </li>
</ul>
    </>
  );
};

export default Pagination;