import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Term from "./term";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Term word="town" definition="building" />
      <Term word="tree" definition="plant" />
      <Term word="home" definition="brick" />
    </>
  );
}

export default App;
