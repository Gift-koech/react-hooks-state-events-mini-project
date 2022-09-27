import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskItems = tasks.map((tasks) => {
    return (
      <div className="tasks">
        {/* display a list of tasks using Task component */}
        <Task
          key={tasks.text}
          text={tasks.text}
          category={tasks.category}
          onDelete={onDelete} />
      </div>
    )
  })
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
