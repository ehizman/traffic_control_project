import React from "react";
import Light from "./components/Light";
import "./css/traffic_control.css";

function LightBoard(props: { elements: JSX.Element[] }) {
  return <div className="light_board">{props.elements}</div>;
}

function App() {
  const array = ["red", "grey", "grey"];
  const lights = array.map((_color, index) => (
    <Light class={_color} id={index} />
  ));
  return (
    <div className="container">
      <LightBoard elements={lights} />
      <div className="traffic_control_stand">...</div>
    </div>
  );
}

export default App;
