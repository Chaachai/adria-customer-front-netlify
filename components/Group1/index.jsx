import React from "react";
import "./Group1.css";

function Group1(props) {
  const { className } = props;

  return (
    <div className={`group-1 ${className || ""}`}>
      <div className="rectangle-11"></div>
      <div className="rectangle-10"></div>
    </div>
  );
}

export default Group1;
