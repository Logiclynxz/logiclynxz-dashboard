import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SettingsIcon } from "lucide-react";
import Link from "next/link";
import KanbanBoard from "./_component/KanbanBoard";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  // fetch the task base on id
  // await new Promise((resolve) => setTimeout(resolve, 2000));

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
      <KanbanBoard />
    </main>
  );
}
