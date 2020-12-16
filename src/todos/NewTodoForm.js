import React, { useState } from "react";

const NewTodoForm = () => {
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
      <button className="btn btn-primary ml-2">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
