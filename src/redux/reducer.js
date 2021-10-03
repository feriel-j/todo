import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});
export const { addTodos, removeTodos, updateTodos, completeTodos } =
  todoReducer.actions;
export default todoReducer.reducer;
