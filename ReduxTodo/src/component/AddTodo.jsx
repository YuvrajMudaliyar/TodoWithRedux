import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { toast, ToastContainer } from "react-toastify";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    if (input) {
      e.preventDefault();
      dispatch(addTodo(input));
      setInput("");
    } else {
      e.preventDefault();
      toast.error("Please enter a todo");
    }
  };

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <form onSubmit={addTodoHandler} className="space-x-3">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-2"
      >
        Add Todo
      </button>
    </form>
    </>
  );
}

export default AddTodo;
