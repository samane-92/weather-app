import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <footer>
        <a href="https://github.com/samane-92/weather-app" target="_blank">Open-sourced app on GitHub</a>{" "}
        coded by
        <a href="https://github.com/samane-92" target="_blank"> Samaneh R.</a>
      </footer>
    </>
  );
}

export default App;
