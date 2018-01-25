import React from "react";
import "./style.css";
import { floors } from "../../data";
import { Flor } from "./flor";

export const List = () => {
  return (
    <div className="diagram-list">
      {Object.keys(floors)
        .sort()
        .map(id => <Flor key={id} id={id} rooms={floors[id]} />)}
    </div>
  );
};
