import React from "react";

function TodoItem({ todo, index, deleteTodo, toggleCompletion }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(index)}
      />
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
