import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task }) => {
  return (
    <div className="Todo">
      <p>{task.task}</p>
      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};
