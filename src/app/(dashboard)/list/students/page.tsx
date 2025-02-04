"use server";

import { Card } from "@/components/ui/card/card";
import React from "react";
import StudentTable from "@/components/student-table";
import { prisma } from "@/lib/prisma";

const StudentList = async () => {
  const data = await prisma.student.findMany();
  return (
    <>
      <div className="mt-2 p-2">
        <Card className="p-3">
          <h1 className="font-semibold">All Teachers</h1>
          <StudentTable data={data} />
        </Card>
      </div>
    </>
  );
};

export default StudentList;
