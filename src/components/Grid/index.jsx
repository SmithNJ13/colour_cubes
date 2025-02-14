import React, { useState } from "react";
import Timer from "../Timer";

const colours = {
  Red: "#E57373",
  Blue: "#64B5F6",
  Green: "#66BB6A",
  Yellow: "#FFF176",
  Purple: "#CE93D8",
  Orange: "#FF8A65"
};

const Grid = () => {
  const [currentColours, setCurrentColours] = useState(Array(9).fill("ivory"));

  function randomColour(index, range = 5) {
    const keys = Object.keys(colours);
    const maxIndex = Math.min(range, keys.length - 1);
    const randomKey = keys[Math.floor(Math.random() * (maxIndex + 1))];
    const newColour = colours[randomKey];

    setCurrentColours(prevColours => {
      const updatedColours = [...prevColours];
      updatedColours[index] = newColour;
      return updatedColours;
    });
  }

  return (
    <div id="main" className="w-screen h-screen flex flex-col items-center justify-center bg-neutral-800 overflow-hidden">
      <Timer />
      <div className="grid grid-cols-3 grid-rows-3 justify-center mt-4">
        {currentColours.map((color, index) => (
          <div
            key={index}
            className="w-40 h-40 border border-black hover:cursor-pointer transition-colors duration-100"
            style={{ backgroundColor: color }}
            onMouseEnter={() => randomColour(index, 5)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
