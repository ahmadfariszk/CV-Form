import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WorkExperience from "./WorkExp";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./Education";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="mothercontainer">
      <GeneralInfo />
      <WorkExperience />
      <EducationInfo />
    </div>
  );
}

export default App;
