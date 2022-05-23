import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser({ name, email }));
  };

  return (
    <div className="form-box">
      <h3>Please sign in</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">go on</button>
      </form>
    </div>
  );
}
