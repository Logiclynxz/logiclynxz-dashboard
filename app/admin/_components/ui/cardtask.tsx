import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

import Image from "next/image";

export default function CardTask() {
  return (
    <Card className=" dark:bg-[#0e1421] bg-[#fafbfb]  min-h-[410px] relative">
      <CardHeader>
        <div className="">
          <AspectRatio ratio={16 / 9}>
            <Image
              src="/test.jpg"
              alt="Image"
              width={300}
              height={100}
              className="rounded-md object-cover mb-2 w-full h-full object-center"
            />
          </AspectRatio>
        </div>

        <CardTitle>Logiclynxz Website</CardTitle>
        <CardDescription>Service Website</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between ">
          <div>Progress</div>
          <div>20%</div>
        </div>
        <Progress value={20} className="mt-2" />
        <div className="mt-2 flex justify-end gap-1">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <Image
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="/test.jpg"
              alt=""
              width={30}
              height={30}
            />
            <Image
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="/profile.png"
              alt=""
              width={30}
              height={30}
            />
            <Image
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="/test.jpg"
              alt=""
              width={30}
              height={30}
            />
            <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
              +6
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="static lg:absolute bottom-0 w-full">
        <Button className="w-full  bg-[#3662e3] dark:text-white dark:hover:bg-[#0d1b44] hover:bg-[#5da3f4] ">
          Go To Detail
        </Button>
      </CardFooter>
    </Card>
  );
}
