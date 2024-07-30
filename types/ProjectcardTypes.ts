export interface Taskinterface {
  ongoing: number;
  completed: number;
}
export interface DataProps {
  id: string;
  image: string;
  // category: "All" | "Web Development" | "Mobile Development";
  task: Taskinterface;
  members: string[];
  name: string;
}
export interface ProjectCardProps {
  data: DataProps[];
}
