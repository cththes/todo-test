import React from "react";
import "./App.css";
import Todolist from "./components/todos/TodoList";

function App() {

  let tasks = [
    { id: 1, title: "Тестовое задание", isDone: false },
    { id: 2, title: "Прекрасный код", isDone: false },
    { id: 3, title: "Покрытие тестами", isDone: true },
  ];

  const removeTask = (id: number) => {
    tasks = tasks.filter((task) => task.id !== id);
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <Todolist title="What needs to be done" tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
