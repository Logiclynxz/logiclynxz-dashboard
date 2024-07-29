import { Button } from "@/components/ui/button";
import React from "react";
import ProjectCards from "./projectcards";

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
    members: ["test.jpg", "profile.jpg", "test.jpg"],
  },
  {
    id: "f56e7789-6b78-4dac-af16-5e789bcf7321", // another sample UUID
    image: "background.jpg",
    category: "Mobile Development",
    task: {
      ongoing: 50,
      completed: 10,
    },
    name: "Tech Innovations",
    members: ["test.jpg", "profile.jpg", "test.jpg"],
  },
];

export default function ProjectList() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Text</h3>
          <p className="text-sm text-muted-foreground">Another Test</p>
        </div>
        <a href="/projects/new">
          <Button className="bg-[#3662e3] dark:text-white dark:hover:bg-[#0d1b44] hover:bg-[#5da3f4] text-white">
            + Add Project
          </Button>
        </a>
      </div>

      <div className="flex gap-2 mt-5">
        <div>
          <Button>All</Button>
        </div>
        <div>
          <Button>Mobile Development</Button>
        </div>
        <div>
          <Button>Web Development</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -ml-2 mt-5">
        <div className="px-1">
          <ProjectCards />
        </div>
        <div className="px-1">
          <ProjectCards />
        </div>
        <div className="px-1">
          <ProjectCards />
        </div>
        <div className="px-1">
          <ProjectCards />
        </div>
        <div className="px-1">
          <ProjectCards />
        </div>
        <div className="px-1">
          <ProjectCards />
        </div>
      </div>
    </div>
  );
}
