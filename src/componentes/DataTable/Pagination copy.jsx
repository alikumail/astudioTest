import React from "react";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { useDataTable } from '../../contexts/DataTableContext';

const Pagination = ({ canPreviousPage, previousPage, gotoPage, pageIndex, pageOptions, canNextPage, pageCount, nextPage }) => {
  const { setPage } = useDataTable();

  const handlePageChange = (newPageIndex) => {
    gotoPage(newPageIndex);
    setPage(newPageIndex);
  };

  return (
    <ul className="flex items-center space-x-3">
      <li className="text-sm leading-4 text-slate-900 ">
        <button
          className={`${!canPreviousPage && "opacity-50 cursor-not-allowed"}`}
          onClick={() => {
            if (canPreviousPage) {
              previousPage();
              handlePageChange(pageIndex - 1);
            }
          }}
          disabled={!canPreviousPage}
        >
          <ArrowLongLeftIcon className="h-6 w-6" />
        </button>
      </li>
      {pageIndex > 1 && (
        <>
          <li className="text-sm leading-4 text-slate-900">
            <button onClick={() => handlePageChange(0)}>1</button>
          </li>
          <li className="text-sm leading-4 text-slate-900">__</li>
        </>
      )}
      {pageOptions
        .slice(Math.max(0, pageIndex - 1), Math.min(pageOptions.length, pageIndex + 2))
        .map((page, pageIdx) => (
          <li key={pageIdx}>
            <button
              href="#"
              aria-current="page"
              className={`${
                pageIdx === pageIndex - 1 ? "mt-[-20px]" : "mt-0"
              } text-sm flex h-6 w-6  transition-all duration-150`}
              onClick={() => handlePageChange(page)}
            >
              {page + 1}
            </button>
          </li>
        ))}
      {canNextPage && (
        <>
          {pageIndex < pageCount - 2 && (
            <li className="text-sm leading-4 text-slate-900">__</li>
          )}
          <li className="text-sm leading-4 text-slate-900">
            <button
              onClick={() => handlePageChange(pageCount - 1)}
              disabled={!canNextPage}
            >
              {pageCount}
            </button>
          </li>
        </>
      )}
      <li className="text-sm leading-4 text-slate-900">
        <button
          className={`${!canNextPage ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => {
            if (canNextPage) {
              nextPage();
              handlePageChange(pageIndex + 1);
            }
          }}
          disabled={!canNextPage}
        >
          <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
