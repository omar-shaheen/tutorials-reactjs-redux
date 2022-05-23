import React, { Component } from "react";

export default class RenderProps extends Component {
  state = {
    name: "Bla Bla Bla",
  };
  render() {
    return (
      <div>
        {this.props.hamada(this.state.name, "HAMADA")}
        <hr />
      </div>
    );
  }
}
