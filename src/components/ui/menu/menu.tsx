import React from "react";
import { menuItems } from "@/const/menu";
import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

export function Menu() {
  return (
    <div className="mt-1 text-sm">
      {menuItems.map((datas) => (
        <div className="flex flex-col gap-1" key={datas?.title}>
          <span className="hidden lg:block text-gray-400 font-light pl-3">
            {datas.title}
          </span>
          {datas.items.map((i) => {
            if (i.visible.includes(role)) {
              return (
                <Link
                  href={i.href}
                  key={i.label}
                  className="flex items-center cursor-pointer hover:bg-blue-100 justify-center lg:justify-start gap-4 text-gray-500 py-2 px-2"
                >
                  <Image src={i.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{i.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
