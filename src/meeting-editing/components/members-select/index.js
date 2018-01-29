import React, { PureComponent } from "react";
import { Dropdown } from "./components/dropdown";
import { Selected } from "./components/selected";
import { mockMembers } from "../../../data/members";
import "./style.css";

export class MembersSelect extends PureComponent {
  state = {
    search: "",
    isOpen: false,
    selected: [1, 2, 3, 4],
    focusedOption: 0
  };

  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false, focusedOption: 0, search: "" });

  componentWillUnmount() {
    this.close = () => null;
  }

  onInput = e =>
    this.setState({
      search: e.target.value,
      focusedOption: 0,
      isOpen: true
    });

  removeSelected = id =>
    this.setState(prevState => {
      const selected = [...prevState.selected].filter(
        elemId => elemId !== parseInt(id, 10)
      );
      return { selected };
    });

  addSelected = id => {
    this.close();
    this.setState(prevState => {
      const newSelected = [...prevState.selected, parseInt(id, 10)];
      return { selected: newSelected };
    });
  };

  focusPreviousOption = () =>
    this.setState(prevState => {
      const totalLength = this.options().length;
      const { focusedOption } = prevState;
      let next = focusedOption - 1;
      if (next < 0) next = totalLength - 1;
      return { focusedOption: next };
    });

  focusNextOption = () =>
    this.setState(prevState => {
      const totalLength = this.options().length;
      const { focusedOption } = prevState;
      let next = focusedOption + 1;
      if (next > totalLength - 1) next = 0;
      return { focusedOption: next };
    });

  selectFocusedOption = () => {
    let { focusedOption } = this.state;
    const total = this.options();
    if (total.length === 0) return;
    const selectId = parseInt(total[focusedOption].id, 10);
    this.setState(prevState => {
      return { selected: [...prevState.selected, selectId] };
    });
    // TODO: remove this.close and add handling of selectList shrinking
    this.close();
  };

  handleKeyDown = event => {
    switch (event.keyCode) {
      case 27: // escape
        event.preventDefault();
        event.stopPropagation();
        this.close();
        break;
      case 13: // enter
        event.preventDefault();
        event.stopPropagation();
        if (!this.state.isOpen) {
          this.open();
          return;
        }
        this.selectFocusedOption();
        break;

      case 38: // up
        event.preventDefault();
        this.focusPreviousOption();
        break;
      case 40: // down
        event.preventDefault();
        this.focusNextOption();
        break;
      default:
        break;
    }
  };

  options = () => {
    const { selected, search } = this.state;

    return mockMembers
      .filter(item => selected.indexOf(parseInt(item.id, 10)) < 0)
      .filter(item => {
        if (!search) return true;
        return item.login.indexOf(search) >= 0;
      });
  };

  render() {
    const { isOpen, selected, search, focusedOption } = this.state;

    const selectedItems = mockMembers.filter(item => {
      return selected.indexOf(parseInt(item.id, 10)) >= 0;
    });

    const restItems = this.options();

    // NOTE: Later binding of this close
    // used in componentWillUnmount logic
    const close = () => {
      this.close();
    };

    return (
      <div className="multi-select">
        <div className="editing-input-title">Участники</div>
        <input
          className="editing-input"
          onKeyDown={this.handleKeyDown}
          onFocus={this.open}
          onClick={this.open}
          // NOTE: 150ms delay to to catch event from element selection
          onBlur={() => setTimeout(close, 150)}
          onInput={this.onInput}
          value={search}
          placeholder="Например, Тор Одинович"
        />
        <Dropdown
          isOpen={isOpen}
          restItems={restItems}
          addSelected={this.addSelected}
          focusedOption={focusedOption}
        />
        <Selected
          selected={selectedItems}
          removeSelected={this.removeSelected}
        />
      </div>
    );
  }
}
