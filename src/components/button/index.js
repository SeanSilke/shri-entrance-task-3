import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Button = ({ title }) => (
  <Link to="/new" className="App-button">
    {title}
  </Link>
);
