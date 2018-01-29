import React from "react";
import "./style.css";

export const Button = ({ title, ...rest }) => (
  <div className="editing-button" {...rest}>
    {title}
  </div>
);
