import React, { useState } from "react";

export function Button() {
  const [car, setCar] = useState("BMW");
  const [color, setColor] = useState("Red");
  function onClick() {
    setCar("MERC");
    setColor("Blue");
  }

  return (
    <>
      <button onClick={onClick}>
        {" "}
        the best {car} , and the {color}
      </button>
    </>
  );
}

