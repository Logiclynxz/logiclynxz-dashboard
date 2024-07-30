"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ProjectCards from "./projectcards";
import ButtonCategory from "./buttoncategory";
import PageHeader from "@/components/ui/header";

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
  {
    id: "f56e7789-6b78-4dac-af16-5e789bcf7321", // another sample UUID
    image: "background.jpg",
    category: "Mobile Development",
    task: {
      ongoing: 50,
      completed: 20,
    },
    name: "Tech Innovations",
    members: ["test.jpg", "profile.png", "test.jpg"],
  },
  {
    id: "f56e7789-6b78-4dac-af16-5e789bcf7321", // another sample UUID
    image: "background.jpg",
    category: "Mobile Development",
    task: {
      ongoing: 50,
      completed: 8,
    },
    name: "Tech Innovations",
    members: ["test.jpg", "profile.png", "test.jpg"],
  },
];

export default function ProjectList() {
  const [category, setCategory] = useState("All");

  const filterData =
    category === "All"
      ? projectData
      : projectData.filter((cat) => cat.category == category);
  return (
    <div>
      <div className="flex justify-between">
        <PageHeader
          title="Projects"
          description="A list of projects from the clients"
        />
        <a href="/projects/new">
          <Button className="bg-[#3662e3] dark:text-white dark:hover:bg-[#0d1b44] hover:bg-[#5da3f4] text-white">
            + Add Project
          </Button>
        </a>
      </div>
      <ButtonCategory setter={setCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -ml-2 mt-5 px-1">
        <ProjectCards data={filterData} />
      </div>
    </div>
  );
}
