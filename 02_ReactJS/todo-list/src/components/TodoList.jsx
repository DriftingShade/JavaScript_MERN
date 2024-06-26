import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleCompletion }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </ul>
  );
}

export default TodoList;
