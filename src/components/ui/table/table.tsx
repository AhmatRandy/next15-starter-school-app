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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination";

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
  console.log("aa", table.firstPage);
  return (
    <>
      <div className="flex -mt-3 justify-end">
        <Input
          type="text"
          className="w-52 ring-2 h-6 ring-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 rounded-lg px-4"
          placeholder="Search"
        />
      </div>

      <div className="overflow-x-auto shadow-xl rounded-lg mt-2">
        <table className="min-w-full border-collapse bg-white rounded-lg">
          <thead className="bg-[#6c7ae0] text-white shadow-md">
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
                } hover:bg-indigo-50 hover:shadow-lg transition-all duration-300`}
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
      <div className="mt-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200 ease-in-out"
                onClick={() => table.previousPage()}
                isActive={!table.getCanPreviousPage()}
              />
            </PaginationItem>
            <PaginationItem>
              {Array.from({ length: table.getPageCount() }, (_, index) => (
                <PaginationLink
                  onClick={() => table.setPageIndex(index)}
                  key={index}
                  isActive={table.getState().pagination.pageIndex === index}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-teal-200 hover:text-gray-900 transition-colors duration-200 ease-in-out"
                >
                  {index + 1}
                </PaginationLink>
              ))}
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="text-gray-500" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200 ease-in-out"
                onClick={() => table.nextPage()}
                isActive={!table.getCanNextPage()}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="-mt-9">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border border-teal-300 rounded-md p-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:border-teal-500 transition-colors duration-200 ease-in-out"
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
