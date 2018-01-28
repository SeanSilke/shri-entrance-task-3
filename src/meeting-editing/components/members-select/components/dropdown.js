import React, { PureComponent } from "react";

const DropdownElement = ({ login, homeFloor, addSelected, id, focused }) => (
  <div
    className={`multi-select-option ${
      focused ? "multi-select-option-focused" : ""
    }`}
    onClick={() => {
      addSelected(id);
    }}
  >
    <div className="multi-select-userpic" />
    <span>{login}&nbsp;·&nbsp;</span>
    <span> {homeFloor}&nbsp;этаж </span>
  </div>
);

export class Dropdown extends PureComponent {
  ref = null;

  componentDidUpdate() {
    if (!this.props.isOpen) return null;
    const { focusedOption } = this.props;
    let elemHeight;
    let totalElemOnPage;
    let ofset;
    // NOTE: This is prototype code for responsive scrolling
    //  I understands that there is no place for hardCode in production.
    if (this.ref.clientHeight === 136) {
      elemHeight = this.ref.clientHeight / 4;
      totalElemOnPage = 4;
      ofset = 3;
    } else {
      elemHeight = (this.ref.clientHeight - 2) / 3;
      totalElemOnPage = 3;
      ofset = 2;
    }
    if (focusedOption > totalElemOnPage - 1) {
      this.ref.scrollTop = elemHeight * (focusedOption - ofset);
    } else {
      this.ref.scrollTop = 0;
    }
  }

  render() {
    const { isOpen, restItems, addSelected, focusedOption } = this.props;

    if (!isOpen) return null;
    return (
      <div className="multi-select-dropdown" ref={ref => (this.ref = ref)}>
        {restItems.map((props, position) => (
          <DropdownElement
            focused={position === focusedOption}
            addSelected={addSelected}
            key={props.id}
            {...props}
          />
        ))}
      </div>
    );
  }
}
