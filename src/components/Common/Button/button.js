import React from "react";
import "./button.css";

function Button({ text, onClick, outlined }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={outlined ? "outlined-btn" : "btn"} onClick={handleClick}>
      {text}
    </div>
  );
}

export default Button;
