import React, { Component } from "react";

class CompB extends Component {
  render() {
    const { name, updateNameState } = this.props;
    return (
      <div>
        {name}
        <br />
        <button onClick={updateNameState}>Update Name</button>
      </div>
    );
  }
}

export default CompB;
