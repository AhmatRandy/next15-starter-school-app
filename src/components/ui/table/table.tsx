import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { Input } from "../input/input";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function Table<T>({ columns, data }: TableProps<T>) {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    state: {
      pagination,
    },
  });

  return (
    <>
      <div className="mb-6 flex justify-end">
        <Input
          type="text"
          className="w-64 h-10 ring-2 ring-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 rounded-lg px-4"
          placeholder="Search"
        />
      </div>

      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full border-collapse bg-white rounded-lg">
          <thead className="bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-sm font-semibold text-left uppercase tracking-wider border-b border-gray-200"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="text-gray-700">
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={`${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-teal-100 hover:shadow-lg transition-all duration-300`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 text-sm border-b border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-3">
          {/* First Page Button */}
          <button
            className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 transition-all duration-200"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>

          {/* Previous Page Button */}
          <button
            className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 transition-all duration-200"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>

          {/* Page Number Buttons */}
          <div className="flex items-center gap-2">
            {Array.from({ length: table.getPageCount() }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  table.getState().pagination.pageIndex === index
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-teal-100 text-teal-600 hover:bg-teal-200"
                }`}
                onClick={() => table.setPageIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Next Page Button */}
          <button
            className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 transition-all duration-200"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>

          {/* Last Page Button */}
          <button
            className="p-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 transition-all duration-200"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>

          {/* Page Info */}
          <span className="flex items-center gap-2 text-sm text-teal-600">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
        </div>

        {/* Page Size Selector */}
        <div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border border-teal-300 rounded-md p-2 text-sm"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
