import { createContext, useState } from "react";
import "./App.css";

import Parent from "./components/Parent";

export const ColorContext = createContext("black");

function App() {
  const [color, setColor] = useState("red");
  return (
    <ColorContext.Provider value={color}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <Parent />
    </ColorContext.Provider>
  );
}

export default App;
