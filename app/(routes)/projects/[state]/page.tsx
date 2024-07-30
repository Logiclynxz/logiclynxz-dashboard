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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { capitalizeFirstLetter } from "@/lib/utils";
import { redirect } from "next/navigation";
import ProjectCards from "../_components/projectcards";
import { Badge } from "@/components/ui/badge";

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
      <div className="max-w-6xl w-full mx-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="flex-col">
                <CardTitle>New Project</CardTitle>
                <CardDescription>
                  Create a new project to get started.
                </CardDescription>
              </div>
              {/* this button will show the preview of the card */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Preview</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="mt-5">
                    <ProjectCards data={projectData} />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Project Name</Label>
                  <Input id="name" placeholder="Enter project name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Project Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="members">Project Members</Label>
                  {/* <Input type="text" /> */}
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">
                        <Badge>front-end</Badge> Jaymar Phil Engracia
                      </SelectItem>
                      <SelectItem value="2">
                        <Badge variant="destructive">back-end</Badge> Jaymar
                        Phil Engracia
                      </SelectItem>{" "}
                      <SelectItem value="3">
                        <Badge variant="secondary">UI/UX</Badge> Jaymar Phil
                        Engracia
                      </SelectItem>{" "}
                      <SelectItem value="4">
                        <Badge variant="outline">Team Lead</Badge> Jaymar Phil
                        Engracia
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Project Image</Label>
                  <Input id="image" type="file" accept=".jpg, .png" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Cancel</Button> */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Save</Button>
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
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
