import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Hello From Jupiter</h1>
    </>
  );
}

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google"
);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
