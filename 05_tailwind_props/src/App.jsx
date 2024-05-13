import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-semibold bg-green-600 w-80 mx-auto p-3 text-white rounded-xl mb-8">
        Tailwind Test
      </h1>

      <Card username="chaiaurcode" btnText="Click me" />
      <Card username="tutulkabir" btnText="Visit me" />
    </>
  );
}

export default App;
