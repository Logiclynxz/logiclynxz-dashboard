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
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
export default function MiniSidebar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="hidden lg:grid gap-5  p-5 fixed top-[70px] z-30 right-2 lg:w-[300px]">
      <div className="">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl h-[330px] border bg-[#ffffff] dark:bg-[#030712]"
        />
      </div>

      <div className="">
        <Card>
          <CardHeader>
            <div className="flex">
              Task Today
              <div className=""></div>
            </div>
            <div className="overflow-hidden mb-3 ">
              <Image
                src="/test.jpg"
                alt="Image"
                width={300}
                height={100}
                className="object-cover w-full h-[170px] rounded-md my-2"
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
    </div>
  );
}
