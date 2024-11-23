import React from "react";
import { Card } from "@/components/ui/card/card";

interface announcementProps {
  className?: string;

  description?: string;
}

export const Announcement = ({ className, description }: announcementProps) => {
  return (
    <Card className={className}>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">Announcement</h1>
        <span>View All</span>
      </div>
      <div className="bg-blue-100 p-1 rounded-md mt-3 ">
        <div className="justify-between flex items-center pb-1">
          <p className="font-semibold">{description}</p>
          <span className="bg-white rounded-sm text-xs w-[80px]  text-center">
            01-17-2025
          </span>
        </div>
        <p>awdakljwdkajwdklajwkdljaklw</p>
      </div>
      <div className="bg-yellow-100 p-1 rounded-md mt-3 ">
        <div className="justify-between flex items-center pb-1">
          <p className="font-semibold">{description}</p>
          <span className="bg-white rounded-sm text-xs w-[80px]  text-center">
            01-17-2025
          </span>
        </div>
        <p>awdakljwdkajwdklajwkdljaklw</p>
      </div>
      <div className="bg-purple-100 p-1 rounded-md mt-3 ">
        <div className="justify-between flex items-center pb-1">
          <p className="font-semibold">{description}</p>
          <span className="bg-white rounded-sm text-xs w-[80px]  text-center">
            01-17-2025
          </span>
        </div>
        <p>awdakljwdkajwdklajwkdljaklw</p>
      </div>
    </Card>
  );
};
