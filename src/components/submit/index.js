import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Submit = () => {
  return (
    <div className="submit-container">
      <Link to="add">
        <button>+</button>
      </Link>

      <p>SUBMIT A LINK</p>
    </div>
  );
};

export { Submit };
