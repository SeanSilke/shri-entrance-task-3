import React from "react";

export const SelectedRoom = ({ cancel, selected, data, timeInterval }) => {
  const selectedRoom = data.filter(elem => elem.id === selected).pop();
  const { title, floor } = selectedRoom;

  return (
    <div>
      <div className="editing-input-title">Ваша переговорка</div>

      <div className="editing-room-selected">
        <div className="editing-room-cancelButton" onClick={cancel} />
        <span>{timeInterval}</span>
        <span>
          {" "}
          {title} · {floor} этаж{" "}
        </span>
      </div>
    </div>
  );
};
