import React from "react";

import { useTodos, useTheme } from "../store/useStore";

const GlobalTodos = () => {
  const todoItems: any = useTodos();
  const theme: any = useTheme();

  function addTodo(val: string) {
    todoItems.value = [...todoItems.value, { text: val, completed: false }];
  }

  return (
    <div>
      <button onClick={() => addTodo("New Todo - global")}>Add Todo</button>
      <ul>
        {todoItems.value.map((todo: any, index: number) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalTodos;
