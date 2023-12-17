import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-6 py-2 bg-red-600 text-white rounded-full shadow-xl"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-6 py-2 bg-green-600 text-white rounded-full shadow-xl"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-6 py-2 bg-blue-600 text-white rounded-full shadow-xl"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-6 py-2 bg-yellow-600 text-white rounded-full shadow-xl"
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
