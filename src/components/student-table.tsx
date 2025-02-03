"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Teacher } from "@/types/teacher";
import Link from "next/link";
import { Table } from "@/components/ui/table/table";
// import StudentTableActions from "@/components/student-table-actions";

interface StudentTableProps {
  data: Teacher[];
}

export default function StudentTable({ data }: StudentTableProps) {
  const columns: ColumnDef<Teacher>[] = [
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: (info: any) => (
        <span>
          <Link href={`/list/students/${info.row.original.teacherId}`}>
            {info.getValue()}
          </Link>
        </span>
      ),
    },
    {
      accessorKey: "teacherId",
      header: "Teacher ID",
    },
    {
      accessorKey: "subjects",
      header: "Subjects",
    },
    {
      accessorKey: "classes",
      header: "Classes",
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
      // cell: () => <StudentTableActions />,
    },
  ];

  return <Table columns={columns} data={data} />;
}
