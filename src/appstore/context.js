import React from "react";

// this becomes the context that has
// Provider (where you set the state) and Consumer (where you can
// get the state from) properties
export const Context = React.createContext();

// this is a higher order component, which allows you to wrap
// a component in another compenent, this extending its functionality
// but not altering it.  This one injects the global state, along
// with the actions that alter it, into any child we want
export const withContext = Component =>
  class WithContext extends React.Component {
    render() {
      return (
        // this is the method for getting access to state
        // wrap the children in Context.Consumer, which renders a function
        // that renders the child component with state injected
        <Context.Consumer>
          {// this passes through any props we had intended to send, plus
          // adds a new one called "g_state" that gives access
          // to our global state and actions
          state => <Component {...this.props} g_state={state} />}
        </Context.Consumer>
      );
    }
  };
