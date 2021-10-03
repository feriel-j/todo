import React, { useState } from "react";
import { useSelector } from "react-redux";
import { completeTodos } from "../redux/reducer";
import { removeTodos } from "../redux/reducer";
import { updateTodos } from "../redux/reducer";

import TodoItem from "./TodoItem";

const TotalDone = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  const [sort, setSort] = useState("active");
  const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };

  return (
    <div>
      <h4 className="mt-3">Total Complete Items: {completedTodos.length}</h4>
    </div>
  );
};

export default TotalDone;
