import { useState } from "react";

function TodoForm({ addTodo }) {
  // Get add function a prop

  const [value, setvalue] = useState("");

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add a function to store the present and next value
    addTodo(value);
    // After submitting the value clear the input
    setvalue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
