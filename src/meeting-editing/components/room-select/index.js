import React, { PureComponent } from "react";
import "./style.css";
import { SelectedRoom } from "./selected-room";
import { RecommendedRooms } from "./recommended-rooms";
import { selectedTime, recommendedRooms } from "../../../data";

export class RoomSelect extends PureComponent {
  state = {
    selected: null
  };

  selectRoom = id => this.setState({ selected: id });

  cancel = () => this.setState({ selected: null });

  render() {
    const { selected } = this.state;

    if (selected === null) {
      return (
        <RecommendedRooms
          timeInterval={selectedTime}
          data={recommendedRooms}
          selectRoom={this.selectRoom}
        />
      );
    }

    return (
      <SelectedRoom
        cancel={this.cancel}
        timeInterval={selectedTime}
        data={recommendedRooms}
        selected={selected}
      />
    );
  }
}
