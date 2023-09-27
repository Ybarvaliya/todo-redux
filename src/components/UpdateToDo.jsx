import {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateTodo } from "../features/todos/todoSlice";

function UpdateToDo() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {id} = useParams()
  const todos = useSelector(state => state.todoReducer.todos);
  const todo = todos.filter((t) => t.id == id)[0]
  const [title, setTitle] = useState(todo.name);
  const [des, setDes] = useState(todo.des);


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({id, name: title, des})
    dispatch(UpdateTodo({id, name: title, des}))
    setTitle("")
    setDes("")
    navigate('/')
  }

  return (
    <>
      <h1 className="bg-black text-white text-center text-3xl p-5">UPDATE TODO</h1>
      <form onSubmit={handleSubmit} className="text-center p-10 m-5 shadow-md rounded-md w-[60%] ml-[20%]">
        <input
          type="text"
          placeholder="title"
          className="p-2 m-2 border rounded-md border-black w-1/3"
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
          UPDATE TODO
        </button>
      </form>
    </>
  );
}

export default UpdateToDo;
