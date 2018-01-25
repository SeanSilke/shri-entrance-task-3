import React, { Fragment } from "react";
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

export const Editing = props => {
  return (
    <Fragment>
      <Header key="Header" />
      <div className="editing-main">
        <div className="row">
          <div className="editing-header-title"> Новая встреча </div>
          <div className="editing-exit-button hidden-mobile"> </div>
        </div>

        <div className="row">
          <TitleInput />
          <Timepicker />
        </div>

        <div className="row">
          <MembersSelect />
          <div class="mobile-divider" />
          <RoomSelect />
          {/* <RoomRecommended/> */}
        </div>
      </div>

      <div className="editing-bottom">
        <Button onClick={() => props.mutate()} title="Отмена" />
        <Button title="Создать встречу" />
      </div>
    </Fragment>
  );
};

const createEvent = gql`
  mutation {
    createEvent(
      input: {
        title: "Some Name"
        dateStart: "2018-01-25T10:48:54.554Z"
        dateEnd: "2018-01-25T10:48:54.554Z"
      }
      usersIds: [2, 3, 4]
      roomId: 3
    ) {
      id
    }
  }
`;

export const EditingWithData = graphql(createEvent)(Editing);
