"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Action, Student } from "@/types";
import { Table } from "@/components/ui/table/table";
import { DeletIcon } from "./ui/icon/delete-icon";
import { useModal } from "@/hooks/use-modal";
import { modalProps } from "@/const/modal";
import { AddTask } from "./ui/icon/add-task-icon";
import { EditIcon } from "./ui/icon/edit-icon";
import { Modal } from "./modal/modal";

interface StudentTableProps {
  data: Student[];
}

export default function StudentTable({ data }: StudentTableProps) {
  const { modalProps, showModal } = useModal<modalProps>();

  const columns: ColumnDef<Student>[] = [
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
      cell: () => (
        <div className="flex gap-2 items-center">
          <AddTask
            size={22}
            onClick={() => {
              showModal({
                action: Action.Add,
                open: true,
                title: "Create a New Teacher",
                type: "student",
              });
            }}
            className="text-green-700 hover:text-green-500 transition-colors duration-200 ease-in-out"
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
            className="text-blue-700 hover:text-blue-500 transition-colors duration-200 ease-in-out"
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
            className="text-red-700 hover:text-red-500 transition-colors duration-200 ease-in-out"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} data={data} />;
      <Modal {...modalProps} />
    </>
  );
}
