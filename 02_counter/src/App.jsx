import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecrease = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={handleIncrease}
        disabled={counter >= 20 ? "disabled" : null}
      >
        Increase
      </button>
      <button
        onClick={handleDecrease}
        disabled={counter < 1 ? "disabled" : null}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
