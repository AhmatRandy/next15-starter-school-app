import React from "react";
import StudentTable from "@/components/student-table";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type QueryParams = Prisma.StudentWhereInput & {
  [key: string]: string | undefined;
};

const Student = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;
  const query: QueryParams = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        query[key] = value;
      }
    }
  }

  const data = await prisma.student.findMany({
    where: query,
    include: {
      attendances: true,
    },
    skip: (p - 1) * 10,
    take: 10,
  });

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
