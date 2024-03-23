import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import Parent from "./components/Parent.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Parent />
    </>
  );
}

export default App;
