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
      <div className=" mb-4 flex justify-end text-xs rouned-full">
        <Input
          type="text"
          className="w-52 h-6 ring-[1.5px] ring-gray-300"
          placeholder="Search"
        />
      </div>
      <div className="overflow-x-auto">
        <table className=" border-collapse rounded-lg overflow-hidden w-full">
          <thead className="bg-gray-100 text-gray-700 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3  text-sm text-left border-b"
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
          <tbody className="bg-white text-gray-800">
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 border-b text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between flex-row-reverse">
        <div className="flex">
          <button
            className=" p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>

          <button
            className="p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: table.getPageCount() }, (_, index) => (
              <button
                key={index}
                className={` px-1 rounded-sm ${
                  table.getState().pagination.pageIndex === index
                    ? "bg-blue-400 text-white"
                    : ""
                }`}
                onClick={() => {
                  if (index < table.getState().pagination.pageIndex) {
                    table.previousPage();
                  } else if (index > table.getState().pagination.pageIndex) {
                    table.nextPage();
                  }
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className=" p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>

          <button
            className=" p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>

          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
