import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';



export const App =(props:any) => {

    const tasks1 = [
        {id: 1, title:"HTML&CSS", isDone: true},
        {id: 2, title:"JS", isDone: true},
        {id: 3, title:"ReactJS", isDone: false},
    ]
    const tasks2 = [
        {id: 1, title:"Hello World", isDone: true},
        {id: 2, title:"I am happy", isDone: false},
        {id: 3, title:"Yo", isDone: false},
    ]

    const tasks3 = [
        {id: 1, title:"xiaomi", isDone: false},
        {id: 2, title:"I loser", isDone: true},
        {id: 3, title:"I am prof", isDone: false},
    ]


    return (
        <div className="App">
        <Todolist title = " What to learn" tasks={tasks1}/>
        <Todolist title = " Songs" tasks={tasks2}/>
        <Todolist title = " Books" tasks={tasks3}/>
        </div>
    )
}

