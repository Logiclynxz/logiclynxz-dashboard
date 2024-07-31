"use client";
import { Droppable } from "react-beautiful-dnd";
import TaskText from "./Task";
import { ColumnProps } from "@/types/TaskTypes";

const TaskColumn: React.FC<ColumnProps> = ({ column, tasks }) => {
  console.log(`Droppable ID: ${column.id}`);
  return (
    <div className="p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-bold mb-2">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={`min-h-[200px] ${
              snapshot.isDraggingOver ? "bg-red-500" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskText key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskColumn;
