import React from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./todos/TodoList";

const App = () => (
  <div className="App">
    <TodoList></TodoList>
  </div>
);

export default hot(module)(App);
