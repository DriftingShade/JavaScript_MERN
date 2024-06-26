import React from "react";

function TodoItem({ todo, index, deleteTodo, toggleCompletion }) {
  return (
    <li>
      <span
        className="form-check-label"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <input
        className="form-check-input"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(index)}
      />
      <br />
      <button onClick={() => deleteTodo(index)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
