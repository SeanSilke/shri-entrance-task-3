import React from "react";
import "./style.css";

const data = [
  "Лекс Лютер",
  "ТА",
  "ДР",
  "Лекс Лютер",
  "Томас Андерсон",
  "Дарт Вейдер",
  "Лекс Лютер",
  "Томас Андерсон",
  "Дарт Вейдер",
  "Лекс",
  "Томас Андерсон",
  "Дарт Вейдер"
];

const Item = ({ title }) => (
  <div className="multi-select-item">
    <div className="multi-select-userpic" />
    <span>{title} </span>
    <div className="multi-select-remove" />
  </div>
);

export const Selected = () => (
  <div className="multi-select-selected">
    {data.map(name => <Item title={name} />)}
  </div>
);
