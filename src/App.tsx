import React from "react";
import { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist";

export const App = () => {
  let [tasks, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "sddsdsd", isDone: true },
    { id: 5, title: "agv", isDone: false },
    { id: 6, title: "ReactJS", isDone: true },
    { id: 7, title: "dainese", isDone: false },
  ]);

  

  const [filter, setFilter] = useState("All");

  const removeTask = (newID: number) => {
    setTasks(tasks.filter((el) => el.id !== newID));
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
      />
    </div>
  );
};
