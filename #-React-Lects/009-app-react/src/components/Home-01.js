import React, { Component } from "react";

class Home extends Component {
  /* 
    Mounting = [
        > constructor()
        > getDerivedStateFromProps()
        > render()
        > componentDidMount()
    ]

    Updating = [
        > static getDerivedStateFromProps()
        > shouldComponentUpdate()
        > render()
        > getSnapshotBeforeUpdate()
        > componentDidUpdate()
    ]

    Unmounting = [
        > componentWillUnmount()
    ]
  */

  // Mounting
  constructor(props) {
    super(props);
    console.log("constructor()");
    this.state = {};
  }

  // Updating
  updateData = () => {
    this.setState({
      name: "Home Comp.",
    });
  };

  // Mounting
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  // Mounting
  componentDidMount() {
    console.log("componentDidMount");
  }

  // Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  // Updating
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate");
    return true;
  };

  // Updating
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  // Unmounting
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // Mounting
  render() {
    console.log("Render");
    return (
      <div>
        Home
        {/* // Updating */}
        <button onClick={this.updateData}>Update</button>
      </div>
    );
  }
}

export default Home;
