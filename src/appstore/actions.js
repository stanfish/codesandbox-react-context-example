function addRow(name) {
  let rows = this.state.rows;
  rows.push(name);
  this.setState({ rows: rows });
}

function removeRow(name) {
  let rows = [];

  this.state.rows.map(row => {
    if (row !== name) rows.push(row);
  });

  this.setState({ rows: rows });
}

function setDetail(name) {
  this.setState({ detail: name });
}

// state altering actions above this line, but need
// to be registered in bindActions method

function bindActions(container) {
  return {
    addRow: addRow.bind(container),
    removeRow: removeRow.bind(container),
    setDetail: setDetail.bind(container)
  };
}

function initState() {
  let state = {
    rows: ["1111", "2222", "3333", "4444", "5555"]
  };

  return state;
}

module.exports = {
  InitState: initState,
  RegisterActions: container => {
    return bindActions(container);
  }
};
