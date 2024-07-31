"use client";
import { TaskProps } from "@/types/TaskTypes";
import { Draggable } from "react-beautiful-dnd";

const TaskText: React.FC<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="p-2 border border-gray-300 bg-white my-2 rounded"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default TaskText;
