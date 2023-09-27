import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      const { id, name, des } = action.payload;
      state.todos.push({ id, name, des });
    },
    UpdateTodo: (state, action) => {
      const { id, name, des } = action.payload;
      const todo = state.todos.find((t) => t.id == id);
      if (todo) {
        todo.name = name;
        todo.des = des;
      }
    },
    DeleteTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        state.todos = state.todos.filter((t) => t.id !== id);
      }
    },
  },
});

export const { AddTodo, UpdateTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
