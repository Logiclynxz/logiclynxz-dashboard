import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PageHeader from "@/components/ui/header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Archive, Ellipsis, SettingsIcon, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  // fetch the task base on id
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <main className="flex-1 grid grid-cols-3 gap-6">
      <div className="col-span-3 flex items-center justify-between">
        <div className="flex-col">
          <PageHeader title="Tasks" />
          <Button variant="link" className="px-0 text-blue-400">
            <Link href={`/projects/view/${id}`}>
              <p>View Project Details</p>
            </Link>
          </Button>
        </div>

        {/* Filter or selection component */}
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select member" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="John Doe">John Doe</SelectItem>
                <SelectItem value="Sarah Jane">Sarah Jane</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Settings button */}
          <Button variant="outline" size="icon">
            <SettingsIcon className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-md h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-medium">Todo</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Ellipsis size="16" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Items</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-red-500 ">
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete All</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Archive className="mr-2 h-4 w-4" />
                  <span>Archive All</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-4 grid gap-4">
          <Card>
            <CardContent className="grid gap-2 py-2">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="flex gap-2 items-center">
                    <div className="font-medium">Finish wireframes</div>
                    <button className="p-1 rounded hover:bg-slate-500 ">
                      <Ellipsis size="16" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete the initial wireframes for the new homepage design.
                  </p>
                  <div className="flex justify-between items-center py-1">
                    <div className="text-sm text-muted-foreground">
                      Due: April 15, 2023
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            src="/profile.png" // Replace with actual avatar URL
                            alt="Profile"
                            className="w-8 h-8 rounded-full border border-gray-300"
                            height={20}
                            width={20}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>John Doe</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2 py-2">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-medium">
                    Research competitor websites
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Analyze the features and design of 5 competitor websites.
                  </p>
                  <div className="flex justify-between items-center py-1">
                    <div className="text-sm text-muted-foreground">
                      Due: April 10, 2023
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            src="/profile.png" // Replace with actual avatar URL
                            alt="Profile"
                            className="w-8 h-8 rounded-full border border-gray-300"
                            height={20}
                            width={20}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>John Doe</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-md h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-medium">Ongoing</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Ellipsis size="16" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Items</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-red-500 ">
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete All</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Archive className="mr-2 h-4 w-4" />
                  <span>Archive All</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-4 grid gap-4">
          <Card>
            <CardContent className="grid gap-2 py-2">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-medium">Implement new design</div>
                  <p className="text-sm text-muted-foreground">
                    Integrate the new design into the codebase.
                  </p>
                  <div className="flex justify-between items-center py-1">
                    <div className="text-sm text-muted-foreground">
                      Due: April 30, 2023
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            src="/profile.png" // Replace with actual avatar URL
                            alt="Profile"
                            className="w-8 h-8 rounded-full border border-gray-300"
                            height={20}
                            width={20}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>John Doe</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-md h-full">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-medium">Completed</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Ellipsis size="16" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Items</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-red-500 ">
                  <Trash className="mr-2 h-4 w-4" />
                  <span>Delete All</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Archive className="mr-2 h-4 w-4" />
                  <span>Archive All</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-4 grid gap-4">
          <Card>
            <CardContent className="grid gap-2 py-2">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-medium">Finalize branding</div>
                  <p className="text-sm text-muted-foreground">
                    Complete the branding guidelines for the new product launch.
                  </p>
                  <div className="flex justify-between items-center py-1">
                    <div className="text-sm text-muted-foreground">
                      Due: April 1, 2023
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            src="/profile.png" // Replace with actual avatar URL
                            alt="Profile"
                            className="w-8 h-8 rounded-full border border-gray-300"
                            height={20}
                            width={20}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>John Doe</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-2 py-2">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-medium">Write blog post</div>
                  <p className="text-sm text-muted-foreground">
                    Publish a blog post about the new product features.
                  </p>
                  <div className="flex justify-between items-center py-1">
                    <div className="text-sm text-muted-foreground">
                      Due: April 5, 2023
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            src="/profile.png" // Replace with actual avatar URL
                            alt="Profile"
                            className="w-8 h-8 rounded-full border border-gray-300"
                            height={20}
                            width={20}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>John Doe</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
