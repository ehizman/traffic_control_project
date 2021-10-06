import "./css/traffic_control.css";
import React, { useState } from "react";
import Light from "./components/Light";

function App() {
  let [value, setValue] = useState("red");
  let changeColor = () => {
    if (value === "red") {
      setValue("amber");
    } else {
      if (value === "amber") {
        setValue("green");
      } else {
        if (value === "green") {
          setValue("red");
        }
      }
    }
    clearInterval(timer);
  };
  let timer = setInterval(changeColor, 3000);
  return (
    <div className="container">
      <div className="header">
        <h2> Traffic Light Simulation </h2>
      </div>
      <div className="light_board">
        {["red", "amber", "green"].map((_color, index) => (
          <Light class={value === _color ? _color : "grey"} key={index} />
        ))}
      </div>
      <div className="traffic_control_stand">.</div>
    </div>
  );
}

export default App;
