"use server";

import { Card } from "@/components/ui/card/card";
import React from "react";

// import { useModal } from "@/hooks/use-modal";
// import { modalProps } from "@/const/modal";
import { Modal } from "@/components/modal/modal";

import StudentTable from "@/components/student-table";
import { prisma } from "@/lib/prisma";

const StudentList = async () => {
  const data = await prisma.teacher.findMany();
  console.log("data", data);

  //     fullName: "students",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  //   {
  //     fullName: "tandy",
  //     teacherId: "miller",
  //     subjects: "Chemistry",
  //     classes: "4B",
  //     phone: "081258351781",
  //     address: "Jakarta",
  //   },
  // ];

  // const columns = React.useMemo<ColumnDef<Teacher>[]>(
  //   () => [
  //     {
  //       accessorKey: "fullName",
  //       header: "Full Name",
  //       cell: (info: any) => {
  //         return (
  //           <span>
  //             <Link href="/list/students/1"> {info.getValue()}</Link>
  //           </span>
  //         );
  //       },
  //     },
  //     {
  //       accessorKey: "teacherId",
  //       header: "Teacher ID",
  //       cell: (info) => info.getValue(),
  //     },
  //     {
  //       accessorKey: "subjects",
  //       header: "Subjects",
  //       cell: (info) => info.getValue(),
  //     },
  //     {
  //       accessorKey: "classes",
  //       header: "Classes",
  //       cell: (info) => info.getValue(),
  //     },
  //     {
  //       accessorKey: "phone",
  //       header: "Classes",
  //       cell: (info) => info.getValue(),
  //     },
  //     {
  //       accessorKey: "address",
  //       header: "Address",
  //       cell: (info) => info.getValue(),
  //     },
  //     {
  //       accessorKey: "action",
  //       header: "Action",
  //       cell: () => (
  //         <div className="flex gap-2 items-center">
  //           <AddTask
  //             size={22}
  //             onClick={() => {
  //               showModal({
  //                 action: Action.Add,
  //                 open: true,
  //                 title: "Create a New Teacher",
  //                 type: "student",
  //               });
  //             }}
  //             className="text-green-700 hover:text-green-500 transition-colors duration-200 ease-in-out"
  //           />
  //           <EditIcon
  //             size={22}
  //             onClick={() => {
  //               showModal({
  //                 action: Action.Edit,
  //                 open: true,
  //                 title: "oke",
  //               });
  //             }}
  //             className="text-blue-700 hover:text-blue-500 transition-colors duration-200 ease-in-out"
  //           />
  //           <DeletIcon
  //             size={22}
  //             onClick={() => {
  //               showModal({
  //                 action: Action.Delete,
  //                 open: true,
  //                 title: "Are you sure want to delete this data ? ",
  //               });
  //             }}
  //             className="text-red-700 hover:text-red-500 transition-colors duration-200 ease-in-out"
  //           />
  //         </div>
  //       ),
  //     },
  //   ],
  //   []
  // );
  return (
    <>
      <div className="mt-2 p-2">
        <Card className="p-3">
          <h1 className="font-semibold">All Teachers</h1>
          {/* <Table columns={columns} data={data} /> */}
          <StudentTable data={data} />
        </Card>
      </div>
      {/* <Modal {...modalProps} /> */}
    </>
  );
};

export default StudentList;
