import React from "react";

const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-md-8">
          <h3>{todo.text}</h3>
        </div>
        <div className="col">
          <button className="button btn-primary">Mark as completed</button>
          <button
            onClick={() => onRemovePressed(todo.text)}
            className="button btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
