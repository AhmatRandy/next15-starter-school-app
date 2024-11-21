import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  return (
    <div className="flex mt-3 justify-end md:justify-between lg:justify-between   ">
      <div className="hidden md:flex space-x-2 pl-2 items-center text-xs rouned-full">
        <Image alt="" src="/search.png" width={15} height={15} />
        <Input
          type="text"
          className="w-52 h-6 ring-[1.5px] ring-gray-300"
          placeholder="Search"
        />
      </div>
      <div className="flex space-x-2 items-center pr-4 justify-end ">
        <div className="w-7 h-7 rounded-full">
          <Image alt="" src="/message.png" width={20} height={20} />
        </div>
        <div className="w-7 h-7 rounded-full justify-center ">
          <Image alt="" src="/announcement.png" width={20} height={20} />
          <div className="absolute fixed flex items-center justify-center bg-purple-500 -top-1 right-[50px] rounded-full w-4 text-white text-xs h-4">
            1
          </div>
        </div>
        <div className="mb-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-7 -h-7">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
