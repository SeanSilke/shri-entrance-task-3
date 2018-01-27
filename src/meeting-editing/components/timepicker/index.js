import React, { PureComponent } from "react";
import "./style.css";

export class Timepicker extends PureComponent {
  dateRef = null;
  dateStartRef = null;
  dateEndRef = null;

  componentDidMount() {
    const { dateRef, dateStartRef, dateEndRef, props: { setDateRefs } } = this;

    setDateRefs({
      dateRef,
      dateStartRef,
      dateEndRef
    });
  }

  render() {
    return (
      <div className="time">
        <div className="time-input-date">
          <div className="editing-input-title hidden-mobile"> Дата </div>
          <div className="editing-input-title visible-mobile">
            {" "}
            Дата и Время{" "}
          </div>
          <input
            type="date"
            defaultValue="2018-01-01"
            className="editing-input"
            ref={ref => (this.dateRef = ref)}
          />
        </div>

        <div className="time-input-time">
          <div className="editing-input-title hidden-mobile"> Начало </div>
          <input
            type="time"
            className="editing-input"
            defaultValue="12:30"
            ref={ref => (this.dateStartRef = ref)}
          />
        </div>

        <div className="time-dash">
          <div className="editing-input-title hidden-mobile"> &nbsp; </div>
          <span> — </span>
        </div>

        <div className="time-input-time">
          <div className="editing-input-title hidden-mobile"> Конец </div>
          <input
            type="time"
            className="editing-input"
            defaultValue="15:30"
            ref={ref => (this.dateEndRef = ref)}
          />
        </div>
      </div>
    );
  }
}
