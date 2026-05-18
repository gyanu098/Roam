import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <section>
      <h1>RoamNepal Frontend</h1>
      <p>Message from backend: {message}</p>
    </section>
  );
}

export default App;
