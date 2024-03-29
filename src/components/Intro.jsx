// import React, { Component } from "react";
import { Trash2 } from "lucide-react";
import "../styles/Intro.css";

function Intro(props) {
  const { setShowIntro, showIntro } = props;
  function handleHideIntro() {
    const x = showIntro;
    setShowIntro(false);
    console.log(x);
  }
  return (
    <div className="introContainer">
      {/* <div className="introImageBackground"></div> */}
      <img
        className="introImage"
        src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <h1>Welcome to CV Generator</h1>
      <div className="introText">
        <p>1. Fill in the forms</p>
        <p>2. Add as many Workplaces or Educations you have.</p>
        <p>
          3. The order of the entries does not matter as it will automatically
          be ordered by date on the CV
        </p>
        <p>4. You can see the preview of the CV on the right card</p>
        <p>5. Once you&apos;re happy, click on the &quot;Print&quot; button</p>
      </div>
      <button onClick={() => handleHideIntro()}>Begin</button>
    </div>
  );
}

export default Intro;
