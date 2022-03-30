import React from "react";
import { Todolist } from "./Todolist";
import "./App.css";

export const App = () => {
  const tasks1 = [
    { id: 1, title: "css", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  const tasks2 = [
    { id: 1, title: "terminator", isDone: true },
    { id: 2, title: "xxx", isDone: false },
    { id: 3, title: "x-men", isDone: false },
  ];
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1}/>
      <Todolist title="What to buy" tasks={tasks2}/>
    </div>
  );
};
