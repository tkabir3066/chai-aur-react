import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="w-full h-2/4 flex justify-center items-end mb-32">
          <div>
            <button
              onClick={() => setColor("red")}
              className="me-3 bg-red-600 px-6 py-3 rounded-lg"
            >
              Red
            </button>
          </div>
          <div>
            <button
              onClick={() => setColor("pink")}
              className="me-3 bg-pink-600 px-6 py-3 rounded-lg"
            >
              Pink
            </button>
          </div>
          <div>
            <button
              onClick={() => setColor("green")}
              className="me-3 bg-green-600 px-6 py-3 rounded-lg"
            >
              Green
            </button>
          </div>
          <div>
            <button
              onClick={() => setColor("blue")}
              className="me-3 bg-blue-600 px-6 py-3 rounded-lg"
            >
              Blue
            </button>
          </div>
          <div>
            <button
              onClick={() => setColor("yellow")}
              className="me-3 bg-yellow-600 px-6 py-3 rounded-lg"
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
