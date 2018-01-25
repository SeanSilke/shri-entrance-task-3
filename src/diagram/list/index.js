import React from "react";
import "./style.css";
import { Flor } from "./flor";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { distributeByFlore } from "./helpers";

export const List = ({ data: { rooms } } = {}) => {
  if (!rooms) return null;

  const floors = rooms.reduce(distributeByFlore, {});

  return (
    <div className="diagram-list">
      {Object.keys(floors)
        .sort()
        .map(id => <Flor key={id} id={id} rooms={floors[id]} />)}
    </div>
  );
};

export default graphql(gql`
  query {
    rooms {
      id
      floor
      title
      capacity
    }
  }
`)(List);
