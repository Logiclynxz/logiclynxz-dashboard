import DynamicBreadcrumbs from "@/components/Breadcrumbs";
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { capitalizeFirstLetter } from "@/lib/utils";
import { redirect } from "next/navigation";
import ProjectCards from "../_components/projectcards";
import AddProjectForms from "./_components/AddProjectForms";

export default function Page({ params }: { params: { state: string } }) {
  const { state } = params;

  if (state === "view" || state === "edit") {
    console.log(true);
    redirect("/projects/view/1");
  } else if (state !== "new") {
    redirect("/projects");
  }

  return (
    <div>
      <div className="flex gap-1 flex-col mb-4">
        <DynamicBreadcrumbs
          linkName="Projects"
          linkRoute="projects"
          currentPage={`${capitalizeFirstLetter(state)} Page`}
        />
      </div>
      <div className="w-full mx-auto">
        <AddProjectForms />
      </div>
    </div>
  );
}
