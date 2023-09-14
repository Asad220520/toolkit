import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo3, deleteTodo3 } from "../store/reducers/TodoSlice3";

const Todo3 = () => {
  const [value, setValue] = useState("");
  const dispaht = useDispatch();
  const { todo } = useSelector((r) => r.todo3);
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} type="text" />
      <button onClick={() => dispaht(addTodo3(value))}>add</button>
      <ul className=" w-[300px]">
        {todo.map((el) => (
          <div className="flex justify-between">
            {el.title}{" "}
            <button
              onClick={() => dispaht(deleteTodo3(el.id))}
              className="text-red-500"
            >
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo3;
