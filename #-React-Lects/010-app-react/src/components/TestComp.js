import React, { Component } from 'react'

 class TestComp extends Component {
   state = {
     product: 'Laptop',
   }

   componentDidMount() { 
     console.log("This is componentDidMount Lifecycle");
    }

  render() {
    return (
      <div>TestComp {this.props.x} </div>
    )
  }
}

export default TestComp;