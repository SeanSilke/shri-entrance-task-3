import React, { PureComponent } from "react";
import "./style.css";
import { HOURS_RANGE } from "../../data/constants";
import { getHorizontalShift } from "../../helpers";

export class Timeline extends PureComponent {
  ref = null;

  handleScroll = () => {
    const x = getHorizontalShift();
    this.ref.style.transform = `translateX(-${x}px)`;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div
        className="App-timeline"
        ref={ref => {
          this.ref = ref;
        }}
      >
        <div className="App-timeline-currtime">
          <div className="App-timeline-currtime-data"> 11:05 </div>
        </div>
        {HOURS_RANGE.map(id => (
          <div className="App-timeline-hour" key={id}>
            {id}
            <div className="App-timeline-hour-line"> </div>
          </div>
        ))}
      </div>
    );
  }
}
