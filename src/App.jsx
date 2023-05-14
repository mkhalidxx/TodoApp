import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

uuidv4(); //Universal Unique Identifier

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // The todos.filter() method creates a new array that contains elements of the
  // original todos array that satisfies the given condition.
  // So, in this case, it filters out all the elements whose id is not equal
  // to the id passed as an argument.
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default App;
