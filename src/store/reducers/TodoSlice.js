import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TO DO",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTask = {
        id: state.todo.length ? state.todo[state.todo.length - 1].id + 1 : 1,
        title: action.payload,
        isDone: false,
      };
      state.todo.push(newTask);
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
    checkTodo(state, action) {
      state.todo = state.todo.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      );
    },
  },
});
export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
