import React from "react";

import Image from "next/image";
import { Card } from "@/components/ui/card/card";
import { BigCalender } from "@/components/ui/big-calender/big-calender";
import Link from "next/link";
import { Announcement } from "@/components/ui/announcement/announcement";
import { Performance } from "@/components/ui/performance/performance";

const TeacherDetail = () => {
  return (
    <div className="flex-1 p-4 flex flex-col  gap-4 xl:flex-row">
      {/* left */}
      <div className="basis-2/3">
        {/* top */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* user card */}
          <div className="bg-blue-200 p-4 rounded-md flex gap-4  ">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col w-2/3  justify-between ">
              <h1 className="text-xl font-semibold">Ahmat Randy</h1>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate odit voluptate ipsa{" "}
              </p>
              <div className=" text-xs font-medium flex justify-between items-center flex-wrap gap-2">
                <div className="flex md:w-1/3 gap-2 w-full items-center ">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="flex md:w-1/3 gap-2 w-full items-center  ">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="flex md:w-1/3 gap-2 w-full items-center ">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex md:w-1/3 gap-2 w-full items-center ">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* small Card */}
          <div className="flex flex-col gap-2 lg:w-3/1 md:flex-row md:flex-wrap md:gap-2">
            <Card className="p-2 rounded-sm flex gap-2 md:w-[48%] ">
              <Image
                alt=""
                src="/singleAttendance.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </Card>
            <Card className="p-2 rounded-sm flex gap-2 md:w-[48%] ">
              <Image
                alt=""
                src="/singleBranch.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </Card>
            <Card className="p-2 rounded-sm flex gap-2 md:w-[48%] ">
              <Image
                alt=""
                src="/singleLesson.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </Card>
            <Card className="p-2 rounded-sm flex gap-2 md:w-[48%] ">
              <Image
                alt=""
                src="/singleClass.png"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </Card>
          </div>
        </div>

        {/* btom */}
        <div className="mt-2 h-[800px]">
          <Card className="rounded-sm p-2">
            <h1 className="text-xl font-semibold mb-3">Teachers Schedule</h1>
            <BigCalender />
          </Card>
        </div>
      </div>
      {/* rigth */}
      <div className="basis-1/3 flex flex-col gap-3">
        <Card className="rounde-sm p-4 ">
          <h1 className="text-xl font-semibold">Shorcuts</h1>
          <div className="flex gap-4 justify-start flex-wrap mt-2 text-gray-500 text-xs">
            <Link
              href="/"
              className="bg-blue-200 w-fit  p-3 rounded-md text-sm"
            >
              Teacher`s Classes
            </Link>
            <Link
              className="bg-blue-200 w-fit  p-3 rounded-md text-sm"
              href="/"
            >
              Teachers`s Students
            </Link>
            <Link
              className="bg-blue-200 w-fit  p-3  rounded-md text-sm"
              href="/"
            >
              Teacher`s Examps
            </Link>
            <Link
              className="bg-blue-200  p-3 w-fit  rounded-md text-sm"
              href="/"
            >
              Teacher`s Lessons
            </Link>
            <Link
              className="bg-blue-200  p-3 w-fit rounded-md text-sm"
              href="/"
            >
              Teacher`s Assignments
            </Link>
          </div>
        </Card>
        <Performance />
        <Announcement className="p-4" />
      </div>
    </div>
  );
};

export default TeacherDetail;
