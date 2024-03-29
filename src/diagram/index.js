import React, { Fragment } from "react";
import List from "./list";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { TimePanel } from "../components/time-panel";
import { Tooltip } from "../components/tooltip";

export const Diagram = () => (
  <Fragment>
    <Header>
      <Button to="/new" title="Создать встречу" />
    </Header>
    <TimePanel />
    <List />
    <Tooltip />
  </Fragment>
);
