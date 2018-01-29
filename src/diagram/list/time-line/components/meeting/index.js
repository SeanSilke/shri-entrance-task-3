import React from "react";
import { DIAGRAM_LENGTH } from "../../../../../data/constants";
import "./style.css";

export const Meeting = ({ dateStart, dateEnd }) => (
  <div
    style={{
      left: `${dateStart / DIAGRAM_LENGTH * 100}%`,
      width: `${(dateEnd - dateStart) * 100 / DIAGRAM_LENGTH}%`
    }}
    className="timeLine-slot-occupied"
  />
);
