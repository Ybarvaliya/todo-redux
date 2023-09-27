import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTodo } from "../features/todos/todoSlice";
import ShowTodo from "./ShowTodo";

function Home() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodo({ id: todos.length + 1, name: title, des }));
    setTitle("");
    setDes("");
  };

  return (
    <>
      <h1 className="bg-black text-white text-center text-3xl p-5">TODOS</h1>
      <form onSubmit={handleSubmit}  className="w-[60%] ml-[30%] ">
        <input
          type="text"
          placeholder="title"
          className="p-2 m-2 border rounded-md border-black"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <br />
        <input
          type="text"
          placeholder="description"
          className="p-2 m-2 border rounded-md border-black w-1/3"
          onChange={(e) => setDes(e.target.value)}
          value={des}
          required
        />
        <br />
        <button
          type="submit"
          className="bg-black text-white p-2 m-2 rounded-md"
        >
          ADD TODO
        </button>
      </form>
      <ShowTodo></ShowTodo>
    </>
  );
}

export default Home;
