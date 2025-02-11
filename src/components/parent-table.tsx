"use-client";
import React from "react";
import { Table } from "./ui/table/table";
import { ColumnDef } from "@tanstack/react-table";

interface ParentProps {
  data: any;
}

const ParentTable = ({ data }: ParentProps) => {
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "surname",
      header: "Full Name",
    },
    {
      accessorKey: "username",
      header: "Username",
    },
    {
      accessorKey: "classId",
      header: "classId",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "action",
      header: "Action",
    },
  ];
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ParentTable;
