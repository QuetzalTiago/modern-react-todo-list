import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { loadTodos, removeTodoRequest, updateTodoRequest } from "./thunks";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div className="text-muted">Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm></NewTodoForm>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.text}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(updateTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
