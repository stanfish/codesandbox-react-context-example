import React from "react";
import { withContext } from "./appstore/context";

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

module.exports = { Footer: withContext(Footer) };
