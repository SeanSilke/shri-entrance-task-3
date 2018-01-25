import React from "react";
import { Calendar } from "../calendar";
import { Timeline } from "../timeline";
import "./style.css";

export const TimePanel = () => (
  <div className="App-time-panel">
    <Calendar />
    <Timeline />
  </div>
);
