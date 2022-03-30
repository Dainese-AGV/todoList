import React from "react";
import "./Todolist.css";

type taskPropsType = {
  id: number;
  title: string;
  isDone: boolean;
};

type todolistPropsType = {
  title: string;
  tasks: Array<taskPropsType>;
};

export const Todolist = (props: todolistPropsType) => {
  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        <li>
          <input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span>
        </li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Complited</button>
      </div>
    </div>
  );
};
