import React, { ChangeEvent, useState } from "react";

type ObjectType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodolistPropstype = {
  type: string;
  tasks: Array<ObjectType>;
  removeTask: (id: string) => void;
  changeFilter: (value: string) => void;
  Addtasks: (title: string) => void;
};

export const Todolist = (props: TodolistPropstype) => {
  const [title, setTitle] = useState<string>("");
  const taskTitle = () => {
    props.Addtasks(title);
    setTitle("");
  };

  const onChangeHandler = (el: ChangeEvent<HTMLInputElement>) => {
    setTitle(el.currentTarget.value);
  };
  const onKeyHandler = (el: any) => {
    if (el.charCode === 13) {
      taskTitle();
    }
  };

  const onAllclickHandler = () => {
    props.changeFilter("All");
  };
  const onActiveclickHandler = () => {
    props.changeFilter("Active");
  };
  const onCompletedclickHandler = () => {
    props.changeFilter("Completed");
  };

  return (
    <div>
      <h3>{props.type}</h3>
      <div>
        <input
          value={title}
          onChange={onChangeHandler}
          onKeyPress={onKeyHandler}
        />

        <button onClick={taskTitle}>+</button>
      </div>

      <ul>
        {props.tasks.map((el) => {
          const onclickHandler = () => {
            props.removeTask(el.id);
          };
          return (
            <li key={el.id}>
              <button onClick={onclickHandler}>x</button>
              <input type="checkbox" checked={el.isDone} />
              <span>{el.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllclickHandler}>All</button>
        <button onClick={onActiveclickHandler}>Active</button>
        <button onClick={onCompletedclickHandler}>Completed</button>
      </div>
    </div>
  );
};
