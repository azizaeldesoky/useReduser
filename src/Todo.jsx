import { ACTION } from "./App";

function Todo({ todo, dispatch }) {
  return (
    <div className="todos">
      <span style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
        {todo.name}
      </span>
      <div className="btns">
        <button
          className="done"
          onClick={() =>
            dispatch({ type: ACTION.DONE_TODO, payload: { id: todo.id } })
          }
        >
          Donne
        </button>
        <button
          className="delete"
          onClick={() =>
            dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
