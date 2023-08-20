import todoReducer from "./reducers/TodoSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
