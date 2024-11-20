"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { Card, CardHeader } from "@/components/ui/card/card";

type DataItem = {
  name: string;
  count: number;
  fill: string;
};

interface CircleChartProp {
  data: DataItem[];
  title: string;
  className?: string;
}

export const CircleChart = ({ data, title, className }: CircleChartProp) => {
  return (
    <Card className={["p-4", className].join(" ").trim()}>
      <CardHeader className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{title}</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </CardHeader>

      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </Card>
  );
};
