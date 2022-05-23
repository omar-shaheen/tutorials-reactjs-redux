import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // Redux-Toolkit
    dispatch(increment());
  };

  const handleDecrement = () => {
    // Redux-Toolkit
    dispatch(decrement());
  };

  const handleIncrementByValue = (vl) => {
    // Redux-Toolkit
    dispatch(incrementByAmount(vl));
  };

  return (
    <div className="Counter">
      <h3>Redux Toolkit - Counter App</h3>
      <h4> {count} </h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByValue(7)}>Increment By 7</button>
    </div>
  );
}

export default Counter;
