import React from "react";
//import { withContext } from "./store/context";

class AddRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newName: "" };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
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

// Wrap the component in the context so that we have
// access to the state and actions.
// Written this way, this is all we have to do to give
// this component access to the global app state
// and actions
//module.exports = withContext(AddRow);

module.exports = AddRow;
