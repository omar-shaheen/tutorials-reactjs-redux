import React, { Component } from "react";
import queryString from "query-string";

export default class Post extends Component {
  render() {
    const str = queryString.parse(this.props.location.search);
    console.log(str);
    // console.log(this.props.match.params.id);
    return (
      <div>
        Post {this.props.match.params.id}
        <div>My Query String is: {str.name}</div>
      </div>
    );
  }
}
