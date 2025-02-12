"use client";

import { Teacher } from "@/types";
import React from "react";
import { Table } from "./ui/table/table";
import { ColumnDef } from "@tanstack/react-table";

interface TeacherProps {
  data: Teacher[];
}

const TeacherTable = ({ data }: TeacherProps) => {
  const columns = React.useMemo<ColumnDef<Teacher>[]>(
    () => [
      {
        accessorKey: "surname",
        header: "Full Name",
      },
      {
        accessorKey: "id",
        header: "Teacher ID",
      },
      {
        accessorKey: "subjects",
        header: "Subjects",
        cell: (props) => {
          return (
            <>
              {props.row.original.subjects.map(
                (items: { name: string; id: number }) => (
                  <span key={items.id}>{items.name}</span>
                )
              )}
            </>
          );
        },
      },
      {
        accessorKey: "classes",
        header: "Classes",
      },
      {
        accessorKey: "phone",
        header: "Classes",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: () => {
          return (
            <div>
              <button>Action</button>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default TeacherTable;
