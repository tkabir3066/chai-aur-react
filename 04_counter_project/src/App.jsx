import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };
  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  const resetValue = () => {
    setCount((count) => count - count);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {count}</h2>

      <button onClick={handleIncrease} disabled={count >= 5 ? true : false}>
        Increase
      </button>
      <button onClick={handleDecrease} disabled={count <= 0 ? true : false}>
        Decrease
      </button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
}

export default App;
