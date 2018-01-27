import React, { Fragment, PureComponent } from "react";
import { Header } from "../components/header";
import "./style/style.css";
import "./style/input.css";
import "./style/responsive.css";
import { Timepicker } from "./components/timepicker";
import { MembersSelect } from "./components/members-select";
import { RoomSelect, RoomRecommended } from "./components/room-select";
import { TitleInput } from "./components/title-input";
import { Button } from "./components/button";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

export class Editing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleTime = this.handleTime.bind(this);
  }

  dateRefs = null;
  setDateRefs = refs => (this.dateRefs = refs);

  handleTitleInput(event) {
    this.setState({ title: event.target.value });
  }

  handleTime(dateStart) {
    this.setState({ dateStart });
  }

  setDateStart = dateStart => this.setState({ dateStart });
  setDateEnd = dateEnd => this.setState({ dateEnd });

  createEvent = () => {
    const { dateRef, dateStartRef, dateEndRef } = this.dateRefs;

    const data = dateRef.value;
    const startTime = dateStartRef.value;
    const endTime = dateEndRef.value;

    const dateStart = new Date(data + " " + startTime).toISOString();
    const dateEnd = new Date(data + " " + endTime).toISOString();

    return this.props
      .mutate({
        variables: {
          input: {
            title: this.state.title,
            dateStart: dateStart,
            dateEnd: dateEnd
          },
          usersIds: [1, 2, 3],
          roomId: 2
        }
      })
      .then(value => {
        console.log(value);
        return value;
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <Fragment>
        <Header key="Header" />
        <div className="editing-main">
          <div className="row">
            <div className="editing-header-title"> Новая встреча </div>
            <div className="editing-exit-button hidden-mobile"> </div>
          </div>

          <div className="row">
            <TitleInput
              value={this.state.title}
              onChange={this.handleTitleInput}
            />
            <Timepicker setDateRefs={this.setDateRefs} />
          </div>

          <div className="row">
            <MembersSelect />
            <div className="mobile-divider" />
            <RoomSelect />
            {/* <RoomRecommended/> */}
          </div>
        </div>

        <div className="editing-bottom">
          <Button title="Отмена" onClick={() => console.log(this.dateRefs)} />
          <Button onClick={this.createEvent} title="Создать встречу" />
        </div>
      </Fragment>
    );
  }
}

const createEvent = gql`
  mutation createEvent($input: EventInput!, $usersIds: [ID], $roomId: ID!) {
    createEvent(input: $input, usersIds: $usersIds, roomId: $roomId) {
      id
    }
  }
`;

export const EditingWithData = graphql(createEvent)(Editing);
