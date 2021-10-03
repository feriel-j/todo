import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/reducer";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodos({
        title: value,
      })
    );
  };

  return (
    <form className="add-todo" onSubmit={onSubmit}>
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="todo-title"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button className="addbtn">+</button>
    </form>
  );
};

export default AddTodo;
