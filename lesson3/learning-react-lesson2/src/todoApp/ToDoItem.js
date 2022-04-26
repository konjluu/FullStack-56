import React from "react";
const ToDoItem = ({ todo, onUpdateStatus }) => {
  const { id, content, isCompleted } = todo;
  const classes = isCompleted ? `todo-item done` : "todo-item";
  return (
    <div className={classes}>
      <p>{content}</p>
      <i class="fa fa-check-circle" onClick={() => onUpdateStatus(id)}></i>
    </div>
  );
};

export default ToDoItem;
