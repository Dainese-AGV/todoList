import React from "react";
import { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import { Todolist } from "./components/Todolist";

export const App = () => {
  let [tasks, setTasks] = useState([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "sddsdsd", isDone: true },
    { id: v1(), title: "agv", isDone: false },
    { id: v1(), title: "ReactJS", isDone: true },
    { id: v1(), title: "dainese", isDone: false },
  ]);

  const [filter, setFilter] = useState("All");

  const removeTask = (newID: string) => {
    setTasks(tasks.filter((el) => el.id !== newID));
  };
  const addTasks = (title: string) => {
    let task = { id: v1(), title: title, isDone: true };
    let newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  let changeFilter = (value: string) => {
    setFilter(value);
  };

  let filteredTasks = tasks;
  if (filter === "Active") {
    filteredTasks = tasks.filter((el) => el.isDone === false);
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter((el) => el.isDone === true);
  }

  return (
    <div className="App">
      <Todolist
        type={"Monday"}
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter}
        Addtasks={addTasks}
      />
    </div>
  );
};
