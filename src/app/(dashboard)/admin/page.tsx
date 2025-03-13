import { Announcement } from "@/components/ui/announcement/announcement";
import UserCard from "@/components/ui/card/use-card";
import {
  CircleChart,
  AttendanceChart,
  FinanceChart,
} from "@/components/ui/chart";
import { Calender } from "@/components/ui/event-calender/calender";
import React from "react";

export default async function AdminPage() {
  const circleChartData = [
    {
      name: "Total",
      count: 106,
      fill: "white",
    },
    {
      name: "Girls",
      count: 53,
      fill: "#FAE27C",
    },
    {
      name: "Boys",
      count: 53,
      fill: "#C3EBFA",
    },
  ];
  const attendenceChartData = [
    {
      name: "Thu",
      absent: 106,
      present: 80,
    },
    {
      name: "Wed",
      absent: 53,
      present: 30,
    },
    {
      name: "Thu",
      absent: 53,
      present: 20,
    },
    {
      name: "Fri",
      absent: 53,
      present: 20,
    },
  ];
  const financeChartData = [
    {
      name: "Jan",
      income: 4000,
      expense: 2400,
    },
    {
      name: "Feb",
      income: 3000,
      expense: 1398,
    },
    {
      name: "Mar",
      income: 2000,
      expense: 9800,
    },
    {
      name: "Apr",
      income: 2780,
      expense: 3908,
    },
    {
      name: "May",
      income: 1890,
      expense: 4800,
    },
    {
      name: "Jun",
      income: 2390,
      expense: 3800,
    },
    {
      name: "Jul",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Aug",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Sep",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Oct",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Nov",
      income: 3490,
      expense: 4300,
    },
    {
      name: "Dec",
      income: 3490,
      expense: 4300,
    },
  ];

  return (
    <div className="p-3 flex flex-col md:flex-row gap-4">
      <div className="lg:basis-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard title="Teacher" />
          <UserCard title="Parent" />
          <UserCard title="Student" />
          <UserCard title="Staff" />
        </div>
        <div className="mt-3 flex gap-2 flex-wrap md:flex-wrap lg:flex-nowrap">
          <div className="grow basis-72">
            <CircleChart
              data={circleChartData}
              title="Students"
              className="h-full"
            />
          </div>
          <div className="grow">
            <AttendanceChart
              title="Attendance"
              data={attendenceChartData}
              className="h-full"
            />
          </div>
        </div>
        <div className="mt-3 h-[500px]">
          <FinanceChart
            data={financeChartData}
            title="Finance"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="lg:basis-1/3">
        <Calender />
        <Announcement
          className="mt-2 p-3"
          description="lorem ipsum lorem ipsum"
        />
      </div>
    </div>
  );
}
