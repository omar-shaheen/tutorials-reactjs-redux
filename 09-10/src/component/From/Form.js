import React from "react";
import "./Form.css";

export default function Form(props) {
  return (
    <div className="form-box">
      <h3>Please sign in</h3>
      <form onSubmit={props.addUser}>
        <input
          type="text"
          onChange={(e) => props.setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          onChange={(e) => props.setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">go on</button>
      </form>
    </div>
  );
}
