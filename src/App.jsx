import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState("");
  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add a function to store the present and next value
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

export default App;
