import React from "react";
import Task from "./Task"; 

function TaskList() {
  
  const tasks = [
    { id: 1, text: "Buy groceries", category: "Shopping" },
    { id: 2, text: "Finish project", category: "Work" },
    { id: 3, text: "Go for a run", category: "Personal" },
  ];

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
