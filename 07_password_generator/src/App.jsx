import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*()_+-={}[]|<>?/~";
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  return (
    <>
      <h1 className="text-4xl text-center text-white font-semibold my-5">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md px-4 py-8 my-8 rounded-lg text-orange-700 bg-gray-700">
        <h1 className="text-white text-center my-5">Password Generator</h1>
        <div className="flex shadow  overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1  text-center rounded-xl"
            placeholder="Password"
            readOnly
          />

          <button className=" outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0  rounded-lg">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x=1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />

            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x=1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />

            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x=1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />

            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
