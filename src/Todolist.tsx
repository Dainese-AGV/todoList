import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { filterValuesType } from "./App";
import "./Todolist.css";

export type taskPropsType = {
  id: string;
  title: string;
  isDone: boolean;
};

type todolistPropsType = {
  title: string;
  tasks: Array<taskPropsType>;
  removeTasks: (id: string) => void;
  changeFilter: (value: filterValuesType) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
};

export const Todolist = (props: todolistPropsType) => {
  const [newTaskTitle, setnewTaskTitle] = useState("");

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setnewTaskTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      props.addTask(newTaskTitle);
      setnewTaskTitle("");
    }
  };

  const addTask = () => {
    props.addTask(newTaskTitle);
    setnewTaskTitle("");
  };

  const onAllClickHandler = () => {
    props.changeFilter("all");
  };
  const onActiveClickHandler = () => {
    props.changeFilter("active");
  };
  const onCompletedClickHandler = () => {
    props.changeFilter("completed");
  };

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTask}>+</button>
      </div>
      <ul>
        {props.tasks.map((el) => {
          const onRemoveHandler = () => {
            props.removeTasks(el.id);
          };
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(el.id, e.currentTarget.checked);
          };
          return (
            <li key={el.id}>
              <input
                type="checkbox"
                checked={el.isDone}
                onChange={onChangeHandler}
              />
              <span>{el.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Complited</button>
      </div>
    </div>
  );
};
