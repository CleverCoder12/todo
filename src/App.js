import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return null;
    } else {
      db.collection("todo").add({
        todo: input,

        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    }
  };

  useEffect(() => {
    db.collection("todo")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((item) => ({
            Id: item.id,
            Todos: item.data().todo,
          }))
        );
      });
  }, [input]);

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

      {todo.map(({ Id, Todos }) => (
        <div className="list ">
          <li className="unit">{Todos}</li>
          <div className="end">
            <button
              className="button"
              onClick={() => db.collection("todo").doc(Id).delete()}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
