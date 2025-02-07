import React from "react";
import StudentTable from "@/components/student-table";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

const Student = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  console.log("vvv", queryParams);

  const p = page ? parseInt(page) : 1;
  const query: Prisma.TeacherWhereInput = {};

  const data = await prisma.student.findMany();

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        console.log("hello");
      }
    }
  }

  return (
    <>
      <div className="mt-2 p-2">
        <h1 className="font-semibold">All Students</h1>
        <StudentTable data={data} />
      </div>
    </>
  );
};

export default Student;
