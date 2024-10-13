import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Myseat from "./seat";
import "./App.css";

function App() {
  return (
    <div className="entire_carriage">
      <Myseat seat="20" status="train-seat__seat--occupied" />
      <Myseat seat="21" status="train-seat__seat--free" />
      <Myseat seat="22" status="train-seat__seat--occupied" />
      <Myseat seat="23" status="train-seat__seat--free" />
      <Myseat seat="24" status="train-seat__seat--free" />
      <Myseat seat="25" status="train-seat__seat--free" />
      <Myseat seat="26" status="train-seat__seat--occupied" />
      <Myseat seat="27" status="train-seat__seat--free" />
    </div>
  );
}

export default App;
