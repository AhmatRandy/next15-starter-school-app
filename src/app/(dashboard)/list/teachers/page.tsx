import React from "react";
import { prisma } from "@/lib/prisma";
import TeacherTable from "@/components/teacher-table";

const TeacherList = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const data = await prisma.teacher.findMany({
    include: {
      subjects: true,
    },
  });

  return (
    <>
      <div className="mt-2 p-2">
        <h1 className="font-semibold">All Students</h1>
        <TeacherTable data={data} />
      </div>
    </>
  );
};

export default TeacherList;
