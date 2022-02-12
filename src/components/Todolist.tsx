import React from "react";

type ObjectType = {
  id: number;
  title: string;
  isDone: boolean;
};

type TodolistPropstype = {
  type: string;
  tasks: Array<ObjectType>;
  removeTask: (id: number) => void;
  changeFilter: (value: string) => void;
};

export const Todolist = (props: TodolistPropstype) => {
  return (
    <div>
      <h3>{props.type}</h3>
      <div>
        <input />
        <button>+</button>
      </div>

      <ul>
        {props.tasks.map((el) => {
          return (
            <li key={el.id}>
              <button onClick={() => props.removeTask(el.id)}>x</button>
              <input type="checkbox" checked={el.isDone} />
              <span>{el.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("All")}>All</button>
        <button onClick={() => props.changeFilter("Active")}>Active</button>
        <button onClick={() => props.changeFilter("Completed")}>Completed</button>
      </div>
    </div>
  );
};
