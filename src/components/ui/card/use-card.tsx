import React from "react";
import { Card } from "./card";
import Image from "next/image";

interface UserCard {
  title?: string;
}

function UserCard({ title }: UserCard) {
  return (
    <Card className=" odd:bg-purple-300 even:bg-yellow-300 flex-1 min-w-[130px] p-2">
      <div className=" flex flex-col gap-2 ">
        <div className="flex justify-between items-center">
          <span className="bg-white font-semibold flex items-center justify-center rounded-3xl text-[12px] w-[75px] text-green-600 px-2 py-1 text-center">
            24/2024
          </span>
          <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <span className="text-lg font-semibold">1,234</span>
        <span className="text-lg font-semibold">{title}</span>
      </div>
    </Card>
  );
}

export default UserCard;
