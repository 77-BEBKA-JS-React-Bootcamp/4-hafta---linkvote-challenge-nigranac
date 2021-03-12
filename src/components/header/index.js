import React from "react";
import "./style.scss";
const Header = () => {
  return (
    <div className="header-container">
      <p className="header-first">
        Hepsiburada<span>.com</span>
      </p>
      <p className="header-second">
        Link<span id="vote">VOTE</span> <span> Challenge</span>
      </p>
    </div>
  );
};

export { Header };
