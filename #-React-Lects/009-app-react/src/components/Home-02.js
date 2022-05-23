import React, { Component, Fragment } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <li>Home 1</li>
        <li>Home 2</li>
        <li>Home 3</li>
      </Fragment>
    );
  }
}

export default Home;
