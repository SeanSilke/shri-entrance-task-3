import React, { Fragment } from "react";
import { Header } from "../components/header";
import "./style/style.css";
import "./style/input.css";
import "./style/responsive.css";
import { Timepicker } from "./components/timepicker";
import { MembersSelect } from "./components/members-select";
import { RoomSelect } from "./components/room-select";
import { TitleInput } from "./components/title-input";
import { Button } from "./components/button";

export const Editing = props => {
  const onCancel = () => props.history.push("/");
  const onSuccess = () =>
    props.history.push({
      pathname: `/`,
      state: { modal: true }
    });

  return (
    <Fragment>
      <Header key="Header" />
      <div className="editing-main">
        <div className="row">
          <div className="editing-header-title"> Новая встреча </div>
          <div
            className="editing-exit-button hidden-mobile"
            onClick={onCancel}
          />
        </div>

        <div className="row">
          <TitleInput />
          <Timepicker />
        </div>

        <div className="row">
          <MembersSelect />
          <div className="mobile-divider" />
          <RoomSelect />
        </div>
      </div>

      <div className="editing-bottom">
        <Button title="Отмена" onClick={onCancel} />
        <Button title="Создать встречу" onClick={onSuccess} />
      </div>
    </Fragment>
  );
};
