import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ClipboardCheck, ClipboardList, Ellipsis, Percent } from "lucide-react";
import Image from "next/image";
import ButtonLink from "./buttonlink";
import Link from "next/link";
import { ProjectCardProps } from "@/types/ProjectcardTypes";

const ProjectCards = (props: ProjectCardProps) => {
  const { data } = props;
  const percent = (ongoing: number, completed: number): number => {
    const totalTask = ongoing;
    return totalTask > 0 ? (completed / totalTask) * 100 : 0;
  };

  return (
    <>
      {data.map((info, index) => (
        <Card
          className="dark:bg-[#0e1421] bg-[#fafbfb] min-h-[410px] relative px-1"
          key={index}
        >
          <CardHeader>
            <div className="flex gap-2 mb-4">
              <Image
                src={`/${info.image}`}
                width={200}
                height={100}
                alt="backgrround"
                className="object-cover w-full h-28 rounded"
                priority
              />
            </div>
            <CardDescription className="flex justify-between">
              <div className="flex gap-2 flex-col lg:flex-row">
                <div className="flex flex-row gap-1 items-center justify-center">
                  <ClipboardList size={20} />{" "}
                  <strong>{info.task.ongoing}</strong>
                </div>
                Ongoing Task
              </div>
              <div className="flex gap-2 flex-col lg:flex-row">
                <div className="flex gap-1 items-center justify-center">
                  <ClipboardCheck size={20} />{" "}
                  <strong>{info.task.completed}</strong>
                </div>
                Completed Task
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator />
            <div className="flex justify-between mt-4">
              <span>{info.name}</span>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href={`/projects/view/${info.id}`}>
                        View Project
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex justify-between">
              <small>Current Task Progress</small>
              <span>
                {percent(info.task.ongoing, info.task.completed).toFixed(2)}%
              </span>
            </div>
            <Progress
              value={percent(info.task.ongoing, info.task.completed)}
              className="mt-2"
            />
            <div className="mt-2 flex justify-end gap-1">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                {info.members.map((mem, index) => (
                  <Image
                    key={index}
                    className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src={`/${mem}`}
                    alt="sd"
                    width={30}
                    height={30}
                  />
                ))}
                <div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800">
                  +6
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="static lg:relative bottom-0 w-full">
            <ButtonLink id={info.id} />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
export default ProjectCards;
