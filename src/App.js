import React from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";
import "./App.css";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <h1>Action Items</h1>
      <Typography component="h2" variant="h3">
        TO DO | TO READ
      </Typography>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
