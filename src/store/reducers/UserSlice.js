import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    fetchUser(state, action) {
      state.user.push(...action.payload);
    },
  },
});
export const { fetchUser } = userSlice.actions;

export const getUser = () => {
  return async (dispath) => {
    const res = await axios(`https://jsonplaceholder.typicode.com/users`);
    const { data } = await res;
    dispath(fetchUser(data));
  };
};
