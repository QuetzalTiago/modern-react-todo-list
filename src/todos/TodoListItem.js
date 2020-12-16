import React from "react";

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-md-8">
          {todo.isCompleted ? (
            <del>
              <h3>{todo.text}</h3>
            </del>
          ) : (
            <h3>{todo.text}</h3>
          )}
        </div>
        <div className="col">
          {todo.isCompleted ? null : (
            <button
              className="button btn-primary"
              onClick={() => onCompletePressed(todo.id)}
            >
              Mark as completed
            </button>
          )}
          <button
            onClick={() => onRemovePressed(todo.id)}
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
