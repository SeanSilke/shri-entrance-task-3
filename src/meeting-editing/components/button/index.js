import React from "react";
import "./style.css";

export const Button = ({ title, ...other }) => (
  <div className="editing-button" {...other}>
    {title}
  </div>
);
