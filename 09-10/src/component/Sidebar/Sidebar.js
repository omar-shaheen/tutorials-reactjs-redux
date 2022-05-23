import React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
        <li>
          Blog
        </li>
        <li>
          Hello {props.isChanged && props.name}
        </li>
      </ul>
    </div>
  );
}
