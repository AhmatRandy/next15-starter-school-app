"use client";

import { Card } from "@/components/ui/card/card";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@/components/ui/table/table";

const TeacherList = () => {
  const data = [
    {
      fullName: "tandy",
      teacherId: "miller",
      subjects: "Chemistry",
      classes: "4B",
      phone: "081258351781",
      address: "Jakarta",
    },
    {
      fullName: "tandy",
      teacherId: "miller",
      subjects: "Chemistry",
      classes: "4B",
      phone: "081258351781",
      address: "Jakarta",
    },
    {
      fullName: "tandy",
      teacherId: "miller",
      subjects: "Chemistry",
      classes: "4B",
      phone: "081258351781",
      address: "Jakarta",
    },
    {
      fullName: "tandy",
      teacherId: "miller",
      subjects: "Chemistry",
      classes: "4B",
      phone: "081258351781",
      address: "Jakarta",
    },
  ];

  const columns = React.useMemo<ColumnDef<data, any>[]>(
    () => [
      {
        accessorKey: "fullName",
        header: "Full Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "teacherId",
        header: "Teacher ID",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "subjects",
        header: "Subjects",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "classes",
        header: "Classes",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "phone",
        header: "Classes",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "address",
        header: "Address",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );
  return (
    <div className="mt-2 p-2">
      <Card className="p-3 h-screen">
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};

export default TeacherList;
