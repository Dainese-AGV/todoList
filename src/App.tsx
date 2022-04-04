import React, { useState } from "react";
import { taskPropsType, Todolist } from "./Todolist";
import "./App.css";
import { v1 } from "uuid";

export type filterValuesType = "all" | "active" | "completed";

export const App = () => {
  let [tasks, setTasks] = useState<Array<taskPropsType>>([
    { id: v1(), title: "css", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ]);

  let [filter, setFilter] = useState<filterValuesType>("all");

  const changeFilter = (value: filterValuesType) => {
    setFilter(value);
  };

  const addTask = (title: string) => {
    let newTask = { id: v1(), title: title, isDone: true };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  const changeStatus = (taskId: string, isDone: boolean) => {
    let task = tasks.find((e) => e.id === taskId);

    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  };

  let tasksForTodolist = tasks;
  if (filter === "active") {
    tasksForTodolist = tasks.filter((el) => el.isDone === false);
  }
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((el) => el.isDone === true);
  }

  const removeTasks = (id: string) => {
    let newTasks = tasks.filter((el) => el.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Todolist
        addTask={addTask}
        changeFilter={changeFilter}
        title="What to learn"
        tasks={tasksForTodolist}
        removeTasks={removeTasks}
        changeTaskStatus={changeStatus}
      />
    </div>
  );
};
