import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { ClipboardCheck, ClipboardList, Ellipsis } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from "next/image";
import { Button } from '@/components/ui/button'

export default function ProjectCards() {
  return (
    <div>
        <Card className="dark:bg-[#0e1421] bg-[#fafbfb] min-h-[410px] relative">
            <CardHeader>
                <div className="flex p-2 gap-2 mb-4">
                    <Avatar className="w-[50px] h-[50px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h6 className="font-semibold">Pablo Jab</h6>
                        <small>Main Role Ni Niya</small>
                    </div>
                </div>
                <CardDescription className="flex justify-between">
                    <div className="flex gap-2 flex-col lg:flex-row">
                        <div className="flex flex-row gap-1 items-center justify-center">
                            <ClipboardList size={20} /> <strong>100</strong>
                        </div>
                        Ongoing Task
                    </div>
                <div className="flex gap-2 flex-col lg:flex-row">
                    <div className="flex gap-1 items-center justify-center">
                        <ClipboardCheck size={20} /> <strong>20</strong>
                    </div>
                    Completed Task
                </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Separator />
                <div className="flex justify-between mt-4">
                <span>Logiclynxz Website</span>
                    <div>
                        <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Ellipsis />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Project</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex justify-between">
                    <small>Current Task Progress</small>
                    <span>20%</span>
                </div>
                <Progress value={20} className="mt-2" />
                <div className="mt-2 flex justify-end gap-1">
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="/test.jpg"
                        alt="sd"
                        width={30}
                        height={30}
                        />
                        <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="/profile.png"
                        alt="sd"
                        width={30}
                        height={30}
                        />
                        <Image
                        className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                        src="/test.jpg"
                        alt="sd"
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
                <Button className="w-full bg-[#3662e3] dark:text-white dark:hover:bg-[#0d1b44] hover:bg-[#5da3f4]">
                View Member
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
