import React from "react";
import { oneDayOneRoomSchedule } from "../../../data";
import { getFreeSlots } from "./helpers";
import { Meeting } from "./components/meeting";
import { FreeSlot } from "./components/free-slot";

import "./style.css";

const freeSlots = getFreeSlots(oneDayOneRoomSchedule);

export const Timeline = props => {
  const freeSlots = getFreeSlots(oneDayOneRoomSchedule);

  return (
    <div className="timeline">
      {oneDayOneRoomSchedule.map((m, id) => <Meeting key={id} {...m} />)}
      {freeSlots.map((m, id) => <FreeSlot key={id} {...m} {...props} />)}
    </div>
  );
};
