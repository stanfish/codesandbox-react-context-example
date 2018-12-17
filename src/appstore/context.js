import React from "react";

export const Context = React.createContext();

export const withContext = Component =>
  class WithContext extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {state => <Component {...this.props} g_state={state} />}
        </Context.Consumer>
      );
    }
  };
