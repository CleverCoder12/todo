import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(["country", "state", "parish"]);
  const [input, setInput] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length === 1) {
      return null;
    } else {
      setTodo([...todo, input]);
      setInput(" ");
    }
  };
  return (
    <div className="App">
      <h1>Todo list</h1>

      <div className="group">
        <form>
          <input
            className="in"
            placeholder="todo list"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
      {todo.map((item) => (
        <li className="list">{item}</li>
      ))}
    </div>
  );
}

export default App;
