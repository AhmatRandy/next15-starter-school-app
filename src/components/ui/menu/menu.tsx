import React from "react";
import { menuItems } from "@/const/menu";
import Link from "next/link";
import Image from "next/image";

export function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((datas) => (
        <div className="flex flex-col gap-2" key={datas?.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4 pl-3">
            {datas.title}
          </span>
          {datas.items.map((i) => (
            <Link
              href={i.href}
              key={i.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-2"
            >
              <Image src={i.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{i.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
