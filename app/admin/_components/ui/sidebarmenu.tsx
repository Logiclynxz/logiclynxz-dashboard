"use client";

import { Command, CommandGroup, CommandList } from "@/components/ui/command";
import { FolderKanban, Info, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";

export default function SidebarMenu() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleClick = (link: any) => {
    setActiveLink(link);
  };

  const navList = {
    items: [
      {
        link: "/admin",
        icon: <LayoutDashboard size={20} className="hover:animate-spin" />,
        text: "Dashboard",
      },
      {
        link: "/about",
        icon: <Info size={20} />,
        text: "About",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
      {
        link: "/projects",
        icon: <FolderKanban size={20} />,
        text: "Projects",
      },
    ],
  };

  return (
    <div>
      <Command className="h-full">
        <CommandList>
          <CommandGroup heading="Menu">
            {navList.items.map((option, optionkey) => (
              <a
                className={`flex gap-2 cursor-pointer text-[13px] p-2 transition hover:bg-blue-400 hover:text-white rounded-lg ${
                  activeLink === option.link
                    ? "bg-gray-200 dark:bg-[#0d1b44]"
                    : ""
                }`}
                key={optionkey}
                href={option.link}
                onClick={() => handleClick(option.link)}
              >
                {option.icon}
                {option.text}
              </a>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
