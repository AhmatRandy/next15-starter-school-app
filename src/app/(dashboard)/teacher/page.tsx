import { Announcement } from "@/components/ui/announcement/announcement";
import { BigCalender } from "@/components/ui/big-calender/big-calender";
import { Card } from "@/components/ui/card/card";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="p-3 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="lg:basis-2/3">
        <Card className="p-2">
          <BigCalender />
        </Card>
      </div>
      {/* right */}
      <div className="lg:basis-1/3">
        <Announcement className=" p-3" description="lorem ipsum lorem ipsum" />
      </div>
    </div>
  );
};

export default TeacherPage;
