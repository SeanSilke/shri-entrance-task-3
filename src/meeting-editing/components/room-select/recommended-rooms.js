import React from "react";

const RecommendedRoom = ({ timeInterval, title, floor, id, selectRoom }) => (
  <div className="editing-room-recommended" onClick={() => selectRoom(id)}>
    <span>{timeInterval}</span>
    <span>
      {" "}
      {title} · {floor} этаж{" "}
    </span>
  </div>
);

export const RecommendedRooms = ({ data, timeInterval, selectRoom }) => (
  <div>
    <div className="editing-input-title">Рекомендованные переговорки</div>

    {data.map(props => (
      <RecommendedRoom
        key={props.id}
        {...props}
        selectRoom={selectRoom}
        timeInterval={timeInterval}
      />
    ))}

    <div className="editing-room-request">Выберите переговорку</div>
  </div>
);
