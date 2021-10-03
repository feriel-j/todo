import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem id={item.id} title={item.title} completed={item.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
