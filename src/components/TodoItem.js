import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { completeTodos } from "../redux/reducer";
import { removeTodos } from "../redux/reducer";
import { updateTodos } from "../redux/reducer";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(completeTodos({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(removeTodos({ id: id }));
  };
  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodos({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li>
      <div className="Item-todo">
        <input
          type="checkbox"
          className="check"
          onChange={handleCompleteClick}
        ></input>
        <textarea
          className="text-zone"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={title}
          onKeyPress={(e) => update(id, inputRef.current.value, e)}
        />

        <button className="btn edit" onClick={changeFocus}>
          <i class="far fa-edit"></i>
        </button>

        <button className="btn delete" onClick={handleDeleteClick}>
          <i class="fas fa-calendar-times"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
