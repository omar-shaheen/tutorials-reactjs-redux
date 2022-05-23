import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="d_flex">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/compa">CompA</NavLink></li>
          <li><NavLink to="/compb">CompB</NavLink></li>
          <li><NavLink to="/postlists">Posts</NavLink></li>
        </ul>
      </div>
    );
  }
}
