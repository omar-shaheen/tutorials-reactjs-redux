import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PostList extends Component {
  state = {
    lists: [
      { id: 1, name: "Post 1" },
      { id: 2, name: "Post 2" },
      { id: 3, name: "Post 3" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.lists.map((list) => {
          return (
            <NavLink
              style={{ display: "block" }}
              to={"/postlists/" + list.id + '?name=post' + list.id}
              key={list.id}
            >
              {list.name}
            </NavLink>
          );
        })}
      </div>
    );
  }
}
