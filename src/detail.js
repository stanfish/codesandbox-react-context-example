import React from "react";
//import { withContext } from "./appstore/context";
export const NoCloseClassName = "no_close";
class Detail extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick = event => {
    if (!event.target.closest("." + NoCloseClassName)) {
      this.closeMe();
    }
  };

  closeMe() {
    this.props.g_state.actions.setDetail(null);
  }

  render() {
    if (!this.props.g_state.detail) {
      return null;
    }

    return (
      <>
        <div
          style={{ border: "1px solid black", height: "100px", width: "200px" }}
          className="no_close"
        >
          Detail
          <button
            onClick={e => {
              //e.preventDefault();
              // this part I don't like, such a long address to the function
              this.closeMe();
            }}
          >
            X
          </button>
          <br />
          {this.props.g_state.detail} {this.props.g_state.detail}
          {this.props.g_state.detail}
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
export default Detail;
