import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo2, deleteTodo2 } from "../store/reducers/TodoSlice2";

const Todo2 = () => {
  const dispaht = useDispatch();
  const [value, setValue] = useState("");
  const { todo2 } = useSelector((r) => r.todo2);
  console.log("todo2", todo2);
  return (
    <div className="container mx-auto w-[50%]">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" bg-black text-white"
        type="text"
      />
      <button
        onClick={() => dispaht(addTodo2(value))}
        className=" bg-black text-white"
      >
        add
      </button>
      {todo2.map((el) => (
        <ul className="w-[50%]">
          <li className="flex items-center justify-between">
            {el.title}{" "}
            <button
              onClick={() => dispaht(deleteTodo2(el.id))}
              className="text-red-500"
            >
              delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Todo2;
