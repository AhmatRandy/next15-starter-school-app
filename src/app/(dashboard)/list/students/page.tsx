"use client";

import { Card } from "@/components/ui/card/card";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@/components/ui/table/table";
import { Teacher } from "@/types/teacher";
import Link from "next/link";
import { useModal } from "@/hooks/use-modal";
import { modalProps } from "@/const/modal";
import { Modal } from "@/components/modal/modal";
import { Action } from "@/types";
import { EditIcon } from "@/components/ui/icon/edit-icon";
import { AddTask } from "@/components/ui/icon/add-task-icon";
import { DeletIcon } from "@/components/ui/icon/delete-icon";
const StudentList = () => {
  const [modalProps, showModal] = useModal<modalProps>();

  const data = [
    {
      fullName: "students",
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
  const columns = React.useMemo<ColumnDef<Teacher>[]>(
    () => [
      {
        accessorKey: "fullName",
        header: "Full Name",
        // cell: (info) => ,

        cell: (info: any) => {
          return (
            <span>
              <Link href="/list/students/1"> {info.getValue()}</Link>
            </span>
          );
        },
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
      {
        accessorKey: "action",
        header: "Action",
        cell: (info) => {
          return (
            <div className="flex gap-2 items-center">
              <AddTask
                size={22}
                onClick={() => {
                  showModal({
                    action: Action.Add,
                    open: true,
                    title: "Create Teacher",
                  });
                }}
                className="text-green-700"
              />
              <EditIcon
                size={22}
                onClick={() => {
                  showModal({
                    action: Action.Edit,
                    open: true,
                    title: "oke",
                  });
                }}
                className="text-green-700"
              />
              <DeletIcon
                size={22}
                onClick={() => {
                  showModal({
                    action: Action.Delete,
                    open: true,
                    title: "Are you sure want to delete this data ? ",
                  });
                }}
                className="text-green-700"
              />
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <div className="mt-2 p-2">
        <Card className="p-3">
          <h1 className="font-semibold">All Teachers</h1>
          <Table columns={columns} data={data} />
        </Card>
      </div>
      <Modal {...modalProps} />
    </>
  );
};

export default StudentList;
