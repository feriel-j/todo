import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TotalDone from "./components/TotalDone";

function App() {
  return (
    <div className="App">
      <h1>Feriel's Todo List</h1>
      <AddTodo />
      <TodoList />
      <TotalDone />
    </div>
  );
}

export default App;
