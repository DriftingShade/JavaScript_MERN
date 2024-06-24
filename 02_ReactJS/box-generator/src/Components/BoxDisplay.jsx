import React from "react";

function BoxDisplay({ boxes, onDeleteBox }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {boxes.map((box, index) => (
        <div
          key={index}
          style={{
            width: `${box.width}px`,
            height: `${box.height}px`,
            backgroundColor: box.color,
            margin: "10px",
          }}
        >
          <button onClick={() => onDeleteBox(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default BoxDisplay;
