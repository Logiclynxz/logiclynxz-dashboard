"use client";

import { BellIcon, LogOut, Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "Mao ni ang ni notif",
      date: "01-05-24",
      read: true,
    },
    {
      text: "Ato ming notif ni",
      date: "07-01-24",
      read: false,
    },
  ]);

  return (
    <div className="flex lg:grid grid-cols-2 sidebar z-100 top-0 px-4 border-b fixed w-full z-10 lg:pl-[310px] md:pl-[310px] pl-4  bg-white dark:bg-[#030712]">
      <div className=" relative w-[300px] mr-2">
        <Input
          type="email"
          id="email"
          placeholder="Search ..."
          className="pr-[40px] my-4 "
        />
        <Search size={20} className="absolute top-6 right-3" />
      </div>

      <div className=" flex items-center justify-end gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="p-2 border rounded-sm relative">
            <div
              className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                notifications.find((x: any) => x.read === true)
                  ? "bg-green-500"
                  : "bg-neutral-200"
              }`}
            ></div>
            <BellIcon className="h-4 w-4 " />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div className="">
                  <p>{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
        <Button>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
