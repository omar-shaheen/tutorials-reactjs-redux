import React, { Component } from "react";

class CallbackRefs extends Component {

  constructor(props) {
    super(props);

    this.callbackRefs = null;
    this.callbackRefFunc = ele => {
      this.callbackRefs = ele; // input
    }
  }

  componentDidMount() {
    if (this.callbackRefs) {
      this.callbackRefs.focus();
    }
  }


  render() {
    return (
      <div>
        <input type="text" ref={this.callbackRefFunc} />
      </div>
    );
  }
}

export default CallbackRefs;
