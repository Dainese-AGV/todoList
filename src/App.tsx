import React, { useState } from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";
import { AddItemForm } from "./AddItemForm";

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

type TasksStateType = {
  [key: string]: Array<TaskType>;
};

function App() {
  let todolistId1 = v1();
  let todolistId2 = v1();
  let todolistId3 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    { id: todolistId1, title: "What to learn", filter: "all" },
    { id: todolistId2, title: "What to buy", filter: "all" },
    { id: todolistId3, title: "What to now", filter: "all" },
  ]);

  let [tasks, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
    ],
    [todolistId2]: [
      { id: v1(), title: "Milk", isDone: true },
      { id: v1(), title: "React Book", isDone: true },
    ],
  });

  function removeTask(id: string, todolistId: string) {
    //достанем нужный массив по todolistId:
    let todolistTasks = tasks[todolistId];
    // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
    tasks[todolistId] = todolistTasks.filter((t) => t.id != id);
    // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
    setTasks({ ...tasks });
  }

  function addTask(title: string, todolistId: string) {
    let task = { id: v1(), title: title, isDone: false };
    //достанем нужный массив по todolistId:
    let todolistTasks = tasks[todolistId];
    // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
    tasks[todolistId] = [task, ...todolistTasks];
    // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
    setTasks({ ...tasks });
  }

  function changeStatus(id: string, isDone: boolean, todolistId: string) {
    //достанем нужный массив по todolistId:
    let todolistTasks = tasks[todolistId];
    // найдём нужную таску:
    let task = todolistTasks.find((t) => t.id === id);
    //изменим таску, если она нашлась
    if (task) {
      task.isDone = isDone;
      // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
      setTasks({ ...tasks });
    }
  }

  const changeTaskTitle = (
    id: string,
    newTitle: string,
    todolistId: string
  ) => {
    let todolistTasks = tasks[todolistId];
    let task = todolistTasks.find((t) => t.id === id);
    if (task) {
      task.title = newTitle;
      setTasks({ ...tasks });
    }
  };

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find((tl) => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists]);
    }
  }

  function removeTodolist(id: string) {
    // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
    setTodolists(todolists.filter((tl) => tl.id != id));
    // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
    delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
    // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
    setTasks({ ...tasks });
  }

  const addTodoList = (title: string) => {
    let todolist: TodolistType = {
      id: v1(),
      filter: "all",
      title: title,
    };
    setTodolists([todolist, ...todolists]);
    setTasks({ ...tasks, [todolist.id]: [] });
  };

  return (
    <div className="App">
      <AddItemForm addItem={addTodoList} />
      {todolists.map((tl) => {
        let allTodolistTasks = tasks[tl.id];
        let tasksForTodolist = allTodolistTasks;

        if (tl.filter === "active") {
          tasksForTodolist = allTodolistTasks.filter((t) => t.isDone === false);
        }
        if (tl.filter === "completed") {
          tasksForTodolist = allTodolistTasks.filter((t) => t.isDone === true);
        }

        return (
          <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            changeTaskTitle={changeTaskTitle}
            filter={tl.filter}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </div>
  );
}

export default App;
