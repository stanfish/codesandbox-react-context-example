import React from "react";
import { Context, withContext } from "./appstore/context";
import { InitState, RegisterActions } from "./appstore/actions";
import List from "./list";
import AddRow from "./addrow";
import Footer from "./footer";
import Detail from "./detail";

const AddRowWithContext = withContext(AddRow);
const ListWithContext = withContext(List);
const FooterWithContext = withContext(Footer);
const DetailWithContext = withContext(Detail);

class App extends React.Component {
  constructor(props) {
    super(props);

    // the state for this root parent component becomes the
    // state for the whole app
    this.state = InitState();

    // bind the action methods that can alter this component's
    // state to this component's context so that the
    // 'this' keyword works correctly
    this.state.actions = RegisterActions(this);
  }

  render() {
    return (
      // Wrap the whole application in the Context Provider so that state
      // will be available to any descendent component (and pass in this
      // component's state)
      <Context.Provider value={this.state}>
        <div style={{ border: "1px solid black" }}>
          <b>App</b>
          <AddRowWithContext />
          <ListWithContext />
          <DetailWithContext />
          <FooterWithContext />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
