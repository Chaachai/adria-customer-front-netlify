import React from "react";
import "./Navbar.css";

function Navbar(props) {
  const { className } = props;

  return (
    <div className={`navbar inter-bold-waterloo--11px ${className || ""}`}>
      <div className="data-1">Data 1</div>
      <div className="data-2">Data 2</div>
      <div className="data-3">Data 3</div>
      <div className="data-4">Data 4</div>
      <div className="data-5">Data 5</div>
      <div className="data-6">Data 6</div>
      <div className="data-7">Data 7</div>
      <div className="data-8">Data 8</div>
      <div className="data-9">Data 9</div>
    </div>
  );
}

export default Navbar;
