import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeleteTodo } from "../features/todos/todoSlice";

function ShowTodo() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);

  return (
    <div  className="w-[80%] ml-[10%] flex flex-col items-center">
      {todos.map((t) => {
        return (
          <div key={t.id} className="m-5 shadow-md rounded-md w-[50%] p-5">
            <div className="text-2xl">{t.name}</div>
            <div className="text-slate-700 text-md">{t.des}</div>
            <button
              className="bg-black text-white p-2 m-2 rounded-md"
              onClick={() => dispatch(DeleteTodo({ id: t.id }))}
            >
              DELETE
            </button>
            <Link
              to={`/update/${t.id}`}
              className="bg-black text-white p-2 m-2 rounded-md"
            >
              UPDATE
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTodo;
