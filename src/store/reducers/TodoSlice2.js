import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo2: [],
};

export const TodoSlice2 = createSlice({
  name: "todo2",
  initialState,
  reducers: {
    addTodo2: (state, action) => {
      const newTask = {
        id: state.todo2.length ? state.todo2[state.todo2.length - 1].id + 1 : 1,
        title: action.payload,
      };
      state.todo2.push(newTask);
    },
    deleteTodo2: (state, action) => {
      state.todo2 = state.todo2.filter((el) => el.id !== action.payload);
    },
  },
});
export const { addTodo2, deleteTodo2 } = TodoSlice2.actions;
