import React from "react";
import { DIAGRAM_LENGTH } from "../../../../../data/constants";
import ReactHoverObserver from "react-hover-observer";
import { Link } from "react-router-dom";
import "./style.css";

export const FreeSlot = ({ dateStart, dateEnd, setHovering }) => (
  <ReactHoverObserver onHoverChanged={setHovering}>
    <div>
      <Link
        to="/new"
        style={{
          left: `${dateStart / DIAGRAM_LENGTH * 100}%`,
          width: `${(dateEnd - dateStart) * 100 / DIAGRAM_LENGTH}%`
        }}
        className="timeLine-slot-free"
      />
    </div>
  </ReactHoverObserver>
);
