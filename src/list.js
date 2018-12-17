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
                  this.props.g_state.actions.removeRow(member);
                }}
              >
                X
              </button>
              <button
                className={NoCloseClassName}
                onClick={e => {
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

module.exports = { List: withContext(List) };
