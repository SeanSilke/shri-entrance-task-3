import React from "react";
import { Link } from "react-router-dom";
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
        <div className="App-modal-emoji" />
        <div className="App-modal-header"> Встреча создана!</div>
        <div className="App-modal-date">
          {" "}
          14 декабря, <span>15:00—17:00</span>
        </div>
        <div className="App-modal-room"> Готем · 4 этаж</div>
        <Link to="/" className="App-modal-button">
          Хорошо
        </Link>
      </div>
    </div>
  );
};
