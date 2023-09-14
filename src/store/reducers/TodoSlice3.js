const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todo: [],
};
export const TodoSlice3 = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo3: (state, action) => {
      const newTask = {
        id: state.todo.length ? state.todo[state.todo.length - 1].id + 1 : 1,
        title: action.payload,
      };
      state.todo.push(newTask);
    },
    deleteTodo3: (state, action) => {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
  },
});
export const { addTodo3, deleteTodo3 } = TodoSlice3.actions;
export default TodoSlice3.reducer;
