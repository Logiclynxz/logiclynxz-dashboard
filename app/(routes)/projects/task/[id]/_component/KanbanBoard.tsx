"use client";
import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Update with actual path
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Ellipsis, Trash, Archive } from "lucide-react"; // Update with actual icons
import { DataTypes } from "@/types/TaskTypes"; // Import interfaces
import { Button } from "@/components/ui/button";

const initialData: DataTypes = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take the garbage",
      dueDate: "2024-08-01",
      assignedTo: "John Doe",
    },
    "task-2": {
      id: "task-2",
      content: "Watch favorite show",
      dueDate: "2024-08-02",
      assignedTo: "Jane Smith",
    },
    "task-3": {
      id: "task-3",
      content: "Buy groceries",
      dueDate: "2024-08-03",
      assignedTo: "John Doe",
    },
    "task-4": {
      id: "task-4",
      content: "Read a book",
      dueDate: "2024-08-04",
      assignedTo: "Emily Davis",
    },
    "task-5": {
      id: "task-5",
      content: "Clean the house",
      dueDate: "2024-08-05",
      assignedTo: "John Doe",
    },
    "task-6": {
      id: "task-6",
      content: "Exercise",
      dueDate: "2024-08-06",
      assignedTo: "Jane Smith",
    },
    "task-7": {
      id: "task-7",
      content: "Call Mom",
      dueDate: "2024-08-07",
      assignedTo: "Emily Davis",
    },
    "task-8": {
      id: "task-8",
      content: "Write a report",
      dueDate: "2024-08-08",
      assignedTo: "John Doe",
    },
    "task-9": {
      id: "task-9",
      content: "Fix the car",
      dueDate: "2024-08-09",
      assignedTo: "Jane Smith",
    },
    "task-10": {
      id: "task-10",
      content: "Plan vacation",
      dueDate: "2024-08-10",
      assignedTo: "Emily Davis",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To-do",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "Ongoing",
      taskIds: ["task-6", "task-7", "task-8", "task-9", "task-10"],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const SimpleBoard: React.FC = () => {
  const [data, setData] = useState<DataTypes>(initialData);
  const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const destinationColumn = data.columns[destination.droppableId];
    const sourceTaskIds = Array.from(sourceColumn.taskIds);
    const destinationTaskIds = Array.from(destinationColumn.taskIds);

    // Moving tasks within the same column
    if (source.droppableId === destination.droppableId) {
      const [movedTaskId] = sourceTaskIds.splice(source.index, 1);
      sourceTaskIds.splice(destination.index, 0, movedTaskId);
      setData({
        ...data,
        columns: {
          ...data.columns,
          [source.droppableId]: {
            ...sourceColumn,
            taskIds: sourceTaskIds,
          },
        },
      });
    } else {
      const [movedTaskId] = sourceTaskIds.splice(source.index, 1);
      destinationTaskIds.splice(destination.index, 0, movedTaskId);
      setData({
        ...data,
        columns: {
          ...data.columns,
          [source.droppableId]: {
            ...sourceColumn,
            taskIds: sourceTaskIds,
          },
          [destination.droppableId]: {
            ...destinationColumn,
            taskIds: destinationTaskIds,
          },
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <Card>
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="shadow-md h-full"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-medium">{column.title}</h2>
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
                    {tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out ${
                              hoveredTaskId === task.id
                                ? "ring-2 ring-blue-500 transform scale-105"
                                : "transform scale-100"
                            }`}
                            onMouseEnter={() => setHoveredTaskId(task.id)}
                            onMouseLeave={() => setHoveredTaskId(null)}
                          >
                            <div className="flex gap-3">
                              <div className="font-medium">{task.content}</div>
                              {hoveredTaskId === task.id && (
                                <button className="p-1 rounded hover:bg-slate-500 transition-transform duration-300 ease-in-out">
                                  <Ellipsis size="16" />
                                </button>
                              )}
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-sm text-muted-foreground">
                                Due: {task.dueDate}
                              </div>
                              <div className="flex justify-between items-center py-1">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <img
                                        src="/profile.png" // Replace with actual avatar URL
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full border border-gray-300"
                                      />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{task.assignedTo}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                </div>
              </Card>
            )}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
};

export default SimpleBoard;
