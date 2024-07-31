export interface Task {
  id: string;
  content: string;
  dueDate: string; // ISO date string
  assignedTo: string; // Name of the person assigned to the task
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface DataTypes {
  tasks: Record<string, Task>;
  columns: Record<string, Column>;
  columnOrder: string[];
}
