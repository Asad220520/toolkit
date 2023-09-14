import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, checkTodo, deleteTodo } from "../store/reducers/TodoSlice";
const Todo = () => {
  const [value, setValue] = useState("");
  const { todo } = useSelector((r) => r.todo);
  const dispaht = useDispatch();
  console.log(todo);
  const addTask = () => dispaht(addTodo(value));
  return (
    <div className="gap-2 flex items-center flex-col w-[30%] mx-auto py-20">
      <div className="relative w-full pb-10 flex items-center gap-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input
          onKeyDown={(e) =>
            e.key === "Enter" ? dispaht(addTodo(value)) : null
          }
          onChange={(e) => setValue(e.target.value)}
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={addTask}
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      {todo.map((el) => (
        <ul
          key={el.id}
          className="w-[100%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <li className="w-full flex justify-between items-center cursor-pointer  px-4 py-2 rounded-b-lg">
            <span
              className={
                el.isDone
                  ? "flex gap-2 items-center line-through"
                  : "flex gap-2 items-center"
              }
            >
              <input
                onClick={() => dispaht(checkTodo(el.id))}
                className="cursor-pointer"
                type="checkbox"
                checked={el.isDone ? true : false}
              />

              {el.title}
            </span>
            <button
              onClick={() => dispaht(deleteTodo(el.id))}
              className="bg-blue-500 p-1 rounded"
            >
              DELETE
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
