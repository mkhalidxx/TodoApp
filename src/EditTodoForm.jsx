import { useState } from "react";
import "./App.css";

function EditTodoForm({ editTask, task }) {
  // Get function and todo value as props
  const [value, setvalue] = useState(task.task);
  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add a function to edit the present value of the existing todo
    editTask(value, task.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditTodoForm;
