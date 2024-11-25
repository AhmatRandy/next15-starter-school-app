import { Announcement } from "@/components/ui/announcement/announcement";
import { BigCalender } from "@/components/ui/big-calender/big-calender";
import { Card } from "@/components/ui/card/card";
import { Calender } from "@/components/ui/event-calender/calender";
import React from "react";

const Student = () => {
  return (
    <div className="p-3 flex flex-col md:flex-row gap-4">
      {/* left */}
      <div className="lg:basis-2/3">
        <Card className="p-2">
          <h1 className="font-semibold text-lg">Schedule (4a)</h1>
          <BigCalender />
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
