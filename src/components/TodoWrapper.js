import React, { useState } from "react";
import { TodoForm } from "./todoform";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./todo";
uuidv4();
export const TodoWrapper = () => {
  const [todoBlock, setTodoBlock] = useState([]);
  const addTodo = (todo) => {
    setTodoBlock([
      ...todoBlock,
      { id: uuidv4(), task: todo, complete: false, isEditing: false },
    ]);
    console.log(todoBlock);
  };
  return (
    <div className="todoWrapper">
      <TodoForm addTodo={addTodo} />
      {todoBlock.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};
