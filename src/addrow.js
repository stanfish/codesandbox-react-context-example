import React from "react";
import { withContext } from "./appstore/context";

class AddRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newName: "" };
  }
  handleChange = event => {
    // event.preventDefault();
    this.setState({ newName: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.g_state.actions.addRow(this.state.newName);
    this.setState({ newName: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add Row</button>
        </form>
      </>
    );
  }
}

export default withContext(AddRow);

//module.exports = { AddRow: withContext(AddRow) };
