import React from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

export const Header = ({ children }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    {children}
  </header>
);
