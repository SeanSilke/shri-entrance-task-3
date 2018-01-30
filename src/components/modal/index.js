import React from "react";
import { Button } from "../button";
import "./style.css";

export const Modal = props => {
  return (
    <div className="App-modal" onClick={() => props.history.push("/")}>
      <div
        className="App-modal-window"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Button to="/" title="Хорошо" />
      </div>
    </div>
  );
};
