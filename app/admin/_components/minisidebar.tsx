"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Ellipsis, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function MiniSidebar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="dark:bg-[#0e1421]">
            <CalendarDays size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="h-full overflow-y-auto ">
          <SheetHeader>
            <SheetTitle>Task Schedules</SheetTitle>
            {/* <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription> */}
          </SheetHeader>
          <div className="py-[10%]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-xl py-5 border flex justify-center bg-[#ffffff] dark:bg-[#030712] mb-5"
            />
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  Task Today
                  <div className="">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Ellipsis />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Test</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="overflow-hidden ">
                  <Image
                    src="/test.jpg"
                    alt="Image"
                    width={300}
                    height={100}
                    className="object-cover w-full h-[170px] rounded-md mb-2"
                  />
                </div>
                <CardTitle>Logiclynxz Website</CardTitle>
                <CardDescription>Service Website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between ">
                  <p>Progress</p>
                  <p>20%</p>
                </div>
                <Progress value={20} className="mt-2" />
                <div className="mt-2 flex justify-end gap-1">
                  <div className="relative">
                    <Image
                      src="/profile.png"
                      alt="user"
                      width={30}
                      height={30}
                      className=" border rounded-full"
                    />
                    <Plus
                      size={20}
                      className="absolute top-1 left-[5px] bottom-1 opacity-70 text-black"
                    />
                  </div>
                  <Image
                    src="/profile.png"
                    alt="user"
                    width={30}
                    height={30}
                    className=" border rounded-full"
                  />{" "}
                  <Image
                    src="/profile.png"
                    alt="user"
                    width={30}
                    height={30}
                    className=" border rounded-full"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Go To Detail</Button>
              </CardFooter>
            </Card>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <div
                className="
            "
              >
                test footer
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
