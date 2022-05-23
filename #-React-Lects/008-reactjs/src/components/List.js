import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.products.map((ele) => (
          <div key={ele.id}>{ele.title}</div>
        ))}
      </div>
    );
  }
}

export default List;
