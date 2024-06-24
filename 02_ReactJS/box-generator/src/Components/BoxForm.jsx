import React, { useState } from "react";

function BoxForm({ onAddBox }) {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBox({ color, height, width });
    setColor("");
    setHeight("");
    setWidth("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor="height">Height (pixels):</label>
      <input
        id="height"
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label htmlFor="width">Width (pixels):</label>
      <input
        id="width"
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default BoxForm;
