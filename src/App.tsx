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

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((el) => !el.isDone);
  }
  if (filter === "Completed") {
    filteredTasks = tasks.filter((el) => el.isDone);
  }

  let changeFilter = (value: string) => {
    setFilter(value);
  };

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
