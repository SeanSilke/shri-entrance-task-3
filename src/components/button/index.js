import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Button = ({ title, to }) => (
  <Link to={to} className="App-button hidden-mobile">
    {title}
  </Link>
);
