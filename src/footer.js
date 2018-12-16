import React from "react";
//import { withContext } from "./appstore/context";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div
          style={{ border: "1px solid black", height: "100px", width: "200px" }}
        >
          Footer <br />
          {this.props.g_state.rows.map(member => {
            return member + "-";
          })}
        </div>
      </>
    );
  }
}

// Wrap the component in the context so that we have
// access to the state and actions.
// Written this way, this is all we have to do to give
// this component access to the global app state
// and actions
module.exports = Footer;
