"use client";

import { Card } from "@/components/ui/card/card";
import React from "react";
import ParentTable from "@/components/parent-table";
import { prisma } from "@/lib/prisma";

export const ParentList = async () => {
  const data = await prisma.parent.findMany();
  return (
    <div className="mt-2 p-2">
      <Card className="p-3 ">
        <h1 className="font-semibold">All Teachers</h1>
        <ParentTable data={data} />
      </Card>
    </div>
  );
};
