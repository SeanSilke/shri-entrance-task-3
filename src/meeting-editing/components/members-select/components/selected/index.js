import React from "react";
import "./style.css";

const Item = ({ login, removeSelected, id }) => {
  return (
    <div className="multi-select-item ">
      <div className="multi-select-userpic" />
      <span>{login} </span>
      <div className="multi-select-remove" onClick={() => removeSelected(id)} />
    </div>
  );
};

export const Selected = ({ selected, removeSelected }) => (
  <div className="multi-select-selected">
    {selected.map(props => (
      <Item key={props.id} {...props} removeSelected={removeSelected} />
    ))}
  </div>
);
