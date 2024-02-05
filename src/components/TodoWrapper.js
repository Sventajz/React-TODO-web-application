import React, { useState } from "react";
import { TodoForm } from "./todoform";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./todo";
import { EditTodo } from "./edittodo";
uuidv4();
export const TodoWrapper = () => {
  const [todoBlock, setTodoBlock] = useState([]);
  const addTodo = (todo) => {
    setTodoBlock([
      ...todoBlock,
      { id: uuidv4(), task: todo, complete: false, isEditing: false },
    ]);
    console.log("todoblock : ", todoBlock);
  };
  const toggleComplete = (id) => {
    setTodoBlock(
      todoBlock.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodoBlock(todoBlock.filter((todo) => todo.id !== id));
  };
  const editTodo = (id) => {
    setTodoBlock(
      todoBlock.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodoBlock(
      todoBlock.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todoWrapper">
      <h1>Mark it down and DO IT!</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todoBlock.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
