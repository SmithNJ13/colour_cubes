import React, { useState } from 'react'

const Grid = () => {
    const [currentColour, ] = useState("ivory")
    const colours = ["red", "cyan", "lime", "gold"]
  
    function colourChange(e) {
      const number = Math.floor(Math.random()*colours.length)
      const newColour = colours[number]
      e.target.style.backgroundColor = newColour
    }
  
    return (
      <>
      <div className="grid">
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
        <div className="box"
        onMouseEnter={colourChange}
        style={{backgroundColor: currentColour}}></div>
      </div>
      </>
    )
}

export default Grid
