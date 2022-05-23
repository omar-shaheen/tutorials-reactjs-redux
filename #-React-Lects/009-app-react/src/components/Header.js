// rfc => Shortcut For =>>> (Function Component)
// rcc => Shortcut For =>>> (Class Based Component)

import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.title} <br />
        {this.props.name}
      </div>
    );
  }
}
export default Header;
