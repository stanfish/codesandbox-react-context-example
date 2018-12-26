import React from "react";
import { Context } from "./appstore/context";
import { InitState, RegisterActions } from "./appstore/actions";
import List from "./list";
import AddRow from "./addrow";
import Footer from "./footer";
import Detail from "./detail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = InitState();
    this.state.actions = RegisterActions(this);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div style={{ border: "1px solid black" }}>
          <b>App</b>
          <AddRow />
          <List />
          <Detail />
          <Footer />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
