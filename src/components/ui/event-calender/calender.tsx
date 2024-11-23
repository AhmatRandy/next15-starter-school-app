"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Card } from "../card/card";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: "1",
    title: "lorem",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsummmm lorem ipsummmm",
  },

  {
    id: "2",
    title: "lorem",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsummmm lorem ipsummmm",
  },

  {
    id: "3",
    title: "lorem",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsummmm lorem ipsummmm",
  },

  {
    id: "4",
    title: "lorem",
    time: "12:00 PM - 2:00 PM",
    description: "lorem ipsummmm lorem ipsummmm",
  },
];

export const Calender = () => {
  const [value, onChange] = React.useState<Value>(new Date());
  return (
    <>
      <Card className="p-4">
        <Calendar onChange={onChange} value={value} />
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold my-4">Event</h1>
          <Image alt="" src="/moreDark.png" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-5 ">
          {events.map((items) => (
            <div
              className="p-5 border-t-4 border-gray-100 odd:border-t-purple-300 even:border-t-yellow-300"
              key={items.id}
            >
              <div className="flex justify-between items-center">
                <h1>{items.title}</h1>
                <span>{items.time}</span>
              </div>
              <p className="mt-3 max-w-[331px] text-sm break-words">
                awdawdawdawdawdawdawdawdawdawdawdddddddddddddddddd
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};
