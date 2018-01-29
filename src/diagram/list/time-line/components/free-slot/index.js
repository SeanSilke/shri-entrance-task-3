import React from "react";
import { DIAGRAM_LENGTH } from "../../../../../data/constants";
import ReactHoverObserver from "react-hover-observer";
import "./style.css";

export const FreeSlot = ({ dateStart, dateEnd, setHovering }) => (
  <ReactHoverObserver onHoverChanged={setHovering}>
    <div
      style={{
        left: `${dateStart / DIAGRAM_LENGTH * 100}%`,
        width: `${(dateEnd - dateStart) * 100 / DIAGRAM_LENGTH}%`
      }}
      className="timeLine-slot-free"
    />
  </ReactHoverObserver>
);
