import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TO DO",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo(state, action) {
      const newTask = {
        id: new Date().toString(),
        title: action.payload,
        isDone: false,
      };
      state.todo.push(newTask);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
