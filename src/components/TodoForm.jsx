import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";
function TodoForm() {
const [todo,setTodo]=useState("");
const{addTodo} =useTodo();
console.log(todo);
const add =(e)=>{
  e.preventDefault();
  if(!todo ) return;
  addTodo({todo,completed:false})
setTodo("")
}

  return (
      <form onSubmit={add}  className="flex gap-5">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-lg px-5 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
          />
          <button type="submit" className=" rounded-lg px-6 py-1 text-white bg-gray-800 shrink-0 hover:bg-green-600 ">
              Add
          </button>
      </form>
  );
}

export default TodoForm;

