import React from "react";
import { withContext } from "./appstore/context";
import { NoCloseClassName } from "./detail";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.g_state.rows.map(member => {
          return (
            <li>
              {member}
              <button
                onClick={e => {
                  //e.preventDefault();
                  // this part I don't like, such a long address to the function
                  this.props.g_state.actions.removeRow(member);
                }}
              >
                X
              </button>
              <button
                className={NoCloseClassName}
                onClick={e => {
                  //e.preventDefault();
                  // this part I don't like, such a long address to the function
                  this.props.g_state.actions.setDetail(member);
                }}
              >
                >
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

// Wrap the component in the context so that we have
// access to the state and actions.
// Written this way, this is all we have to do to give
// this component access to the global app state
// and actions
export default List;

//module.exports = withContext(List);
