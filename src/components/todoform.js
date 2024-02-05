import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoInput"
        placeholder="Input here"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button type="submit" className="todoButton">
        Submit!
      </button>
    </form>
  );
};
