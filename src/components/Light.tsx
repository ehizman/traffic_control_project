import React, { useState } from "react";
function Light(props: { class: string | undefined; id?: any }) {
  const array: string[] = ["red", "amber", "green"];
  const [color, setColor] = useState(props.class);
  return (
    <span
      className={color}
      id={props.id}
      onClick={() => {
        setColor(array[props.id]);
      }}
    />
  );
}
export default Light;
