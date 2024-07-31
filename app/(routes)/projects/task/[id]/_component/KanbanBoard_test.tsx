"use client";
import React, { useState } from "react";
import TaskColumn from "./TaskColumn";
import { DataTypes } from "@/types/TaskTypes";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const initialData: DataTypes = {
  tasks: {
    "task-1": { id: "task-1", content: "Take the garbage" },
    "task-2": { id: "task-2", content: "Watch favorite show" },
    "task-3": { id: "task-3", content: "Write report" },
    "task-4": { id: "task-4", content: "Read book" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To-do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Ongoing",
      taskIds: ["task-3", "task-4"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

const KanbanBoard = () => {
  const [data, setData] = useState<DataTypes>(initialData);

  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4 p-4">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return <TaskColumn key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
