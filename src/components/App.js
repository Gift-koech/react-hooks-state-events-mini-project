import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

//import Task from "./Task";

function App() {
  const [category, setCategory] = useState("All")

const [tasks, setTasks] = useState(TASKS)

const tasksVisible = tasks.filter(
  (task)=>category==="all" || task.category ==category
)
  
function handleDelete(deletedTaskText) {
  setTasks(tasks.filter(
    (task) => task.text !== deletedTaskText
  ))
}
  function addTask(newTask) {
    const newTaskArray = [tasks, newTask]
    setTasks(newTaskArray)
}
  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter categories={CATEGORIES}
        selectCategoryFilter={category}
        setselectCategoryFilter={setCategory} />
      
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSumit={ addTask} />

      <TaskList tasks={tasksVisible}
        onDelete={ handleDelete} />
     
    </div>
  );
}

export default App;
