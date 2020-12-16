import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setinputValue] = useState("");

  return (
    <div className="container input-group">
      <input
        className="form-control"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText && inputValue !== "") {
            onCreatePressed(inputValue);
            setinputValue("");
          }
        }}
        className="btn btn-primary ml-2"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
