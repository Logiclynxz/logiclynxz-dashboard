"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarDaysIcon, ChevronLeftIcon, UploadIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProjectCards from "../../_components/projectcards";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { formatDateRange } from "@/lib/utils";

// sample data for the preview
let projectData = [
  {
    id: "e46e5546-5cf7-4cac-ae16-4d5468bcf729", // sample UUID
    image: "background.jpg",
    category: "Web Development",
    task: {
      ongoing: 100,
      completed: 20,
    },
    name: "Logiclynxz",
    members: ["test.jpg", "profile.png", "test.jpg"],
  },
];

const AddProjectForms = () => {
  const [selectedRange, setSelectedRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Ensure the result is a string
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  // Handle date range change
  const handleDateChange = (range: any) => {
    setSelectedRange(range);
  };

  const clearDateRange = () => {
    setSelectedRange({ from: undefined, to: undefined });
  };
  const handleReselectClick = () => {
    setImage(null);
  };

  return (
    <main className="grid flex-1 items-start w-full gap-4 md:gap-8">
      <div className="mx-auto grid flex-1 auto-rows-max gap-4">
        {/* header */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => router.push("/projects")}
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Creating a new Project
          </h1>
          <Badge
            variant="outline"
            className="ml-auto sm:ml-0 bg-green-300 text-black"
          >
            Creating
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary" size="sm">
                  Save
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Project Creation</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to create this new project?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            {/* this button will show the preview of the card */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  Preview
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="mt-5">
                  <ProjectCards data={projectData} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/* content */}
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          {/* left content */}
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Consist details of the client</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Client Name</Label>
                    <Input
                      id="name"
                      name="clientName"
                      type="text"
                      className="w-full"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="projectDescription"
                      className="min-h-32"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name">Client Budget</Label>
                    <Input
                      id="budget"
                      name="clientBudget"
                      type="number"
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category" aria-label="Select category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Mobile Development">
                          Mobile Development
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="members">Members</Label>
                    <Select>
                      <SelectTrigger id="members" aria-label="Select member">
                        <SelectValue placeholder="Select member" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="John Doe">
                          <Badge>front-end</Badge> John Doe
                        </SelectItem>
                        <SelectItem value="Sarah Jane">
                          <Badge>back-end</Badge> Sarah Jane
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="calendar">Project Date Range</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between font-normal"
                        >
                          <div className="flex items-center">
                            <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                            {formatDateRange(selectedRange)}
                          </div>
                          {selectedRange.from && selectedRange.to && (
                            <X
                              className="ml-2 h-6 w-6 p-1 cursor-pointer transition-all duration-200 ease-in-out hover:bg-slate-400 hover:text-black hover:rounded-full"
                              onClick={clearDateRange}
                            />
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          id="calendar"
                          initialFocus
                          mode="range"
                          numberOfMonths={2}
                          selected={selectedRange}
                          onSelect={handleDateChange}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* right content */}
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select>
                      <SelectTrigger id="status" aria-label="Select status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>
                  The image will be used as a background in the card
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="relative grid grid-cols-3 gap-2">
                    {!image && (
                      <label
                        htmlFor="imageUpload"
                        className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed cursor-pointer"
                      >
                        <UploadIcon className="h-4 w-4 text-muted-foreground" />
                        <Input
                          id="imageUpload"
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                    {image && (
                      <div className="col-span-3 flex items-center justify-center flex-col gap-2">
                        <img
                          src={image}
                          alt="Uploaded"
                          className="max-w-full max-h-64 object-cover rounded-md"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={handleReselectClick}
                        >
                          Reselect Image
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>
                  Detailed view of the clients project's task and documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-3">
                    <Label htmlFor="documents">Project Documentation</Label>
                    <div className="w-full bg-red-100 text-black p-4 rounded-md">
                      {/* Links or sections for project documents */}
                      <p>Project documents will be linked here.</p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="documents">Project Tasks</Label>
                    <div className="w-full bg-red-100 text-black p-4 rounded-md">
                      {/* Links or sections for project documents */}
                      <p>Project Tasks will be linked here.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddProjectForms;
