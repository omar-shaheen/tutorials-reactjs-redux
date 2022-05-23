import React, { Component, createRef } from "react";

class Refs extends Component {

  constructor(props) {
    super(props);

    this.inputRef = createRef(); // Object current
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }


  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Refs;
