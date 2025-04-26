import { useReducer, useState } from "react";

import "./App.css";
import Todo from "./Todo";

export const ACTION = {
  ADD_TODO: "add-todo",
  DONE_TODO: "done-todo",
  DELETE_TODO: "delete-todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTION.DONE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTION.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
    if (name === "") {
      return;
    }
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });

    setName("");
  }
  console.log(todos);
  return (
    <>
      <form className="form">
        <input
          type="text"
          value={name}
          placeholder="Enter our Todo"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="add" onClick={handelSubmit}>
          Add
        </button>
      </form>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} dispatch={dispatch} />;
      })}
    </>
  );
}

export default App;
