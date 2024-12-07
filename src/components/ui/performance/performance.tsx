"use client";
import React from "react";
import { Card } from "../card/card";
import { Pie, PieChart } from "recharts";
import Image from "next/image";

export const Performance = () => {
  const data = [
    { name: "Group A", value: 93, fill: "#C3EBFA" },
    { name: "Group B", value: 8, fill: "#FAE27C" },
  ];
  return (
    <Card className="p-4 h-80 relative">
      <div className="flex justify-between text-xl font-semibold">
        <h1>Performance</h1>
        <Image src="/moreDark.png" alt="" width={24} height={24} />
      </div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          fill="#8884d8"
          label
        />
      </PieChart>
      <div className="absolute top-48 left-[108px]  text-center">
        <h1 className="text-3xl font-semibold">9.2</h1>
        <p className="text-xs text-gray-500 ">of 10 max LTS</p>
        <h2 className="mt-3 font-medium">1st semeter - 2and semester</h2>
      </div>
    </Card>
  );
};
