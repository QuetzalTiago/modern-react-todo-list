import {
  CREATE_TODO,
  REMOVE_TODO,
  TODO_IS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
      //Never mutate the state
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }
    case TODO_IS_COMPLETED: {
      const { todo: updatedTodo } = payload;
      return state.map((todo) =>
        todo.id == updatedTodo.id ? { ...todo, isCompleted: true } : todo
      );
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
