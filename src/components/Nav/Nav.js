import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";


const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Fun Dog Game</a>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Good Boys: {props.score} | Top Good Boys: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
