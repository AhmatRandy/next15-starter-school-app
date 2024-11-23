import { Announcement } from "@/components/ui/announcement/announcement";
import { Card } from "@/components/ui/card/card";
import { Calender } from "@/components/ui/event-calender/calender";
import React from "react";

const Student = () => {
  return (
    <div className="p-3 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="lg:basis-2/3">
        <Card className="p-3">
          <h1 className="font-semibold text-lg">Schedule (4a)</h1>
          <div className="flex gap-3 justify-end items-center">
            <p className="text-md font-semibold">Monday Aug 12 </p>
            <span className="text-sm bg-slate-300 px-1 py-1 rounded-md">
              Work Week
            </span>
            <span className="text-sm bg-purple-200 px-2 py-1 rounded-md">
              Day
            </span>
          </div>
          <div className="bg-blue-100 mt-2 p-3 rounded-sm flex-col gap-3">
            <div className="flex gap-4 mb-2">
              <span className="w-20">19:30 WIB</span>
              <div className="bg-blue-300 px-2 h-20 w-full">
                <span className="text-xs">20:30 WIB - 07-29 WIB</span>
                <h1>Math</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="w-20">19:30 WIB</span>
              <div className="bg-blue-300 px-2 h-20 w-full">
                <span className="text-xs">20:30 WIB - 07-29 WIB</span>
                <h1>Math</h1>
              </div>
            </div>
          </div>
        </Card>
      </div>
      {/* right */}
      <div className="lg:basis-1/3">
        <Calender />
        <Announcement
          className="mt-2 p-3"
          description="lorem ipsum lorem ipsum"
        />
      </div>
    </div>
  );
};

export default Student;
