import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incByValueAction,
  incrementAction,
} from "../redux/actions/counterActions";

function Counter() {
  
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch(incrementAction());

    // Redux Thunk
    incrementAction(dispatch);
  };

  const handleDecrement = () => {
    // dispatch(decrementAction());

    // Redux Thunk
    decrementAction(dispatch);
  };

  const handleIncrementByValue = (vl) => {
    // dispatch(incByValueAction(vl));

    // Redux Thunk
    incByValueAction(vl, dispatch);
  };

  return (
    <div className="Counter">
      <h3>Counter App</h3>
      <h4> {count} </h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByValue(7)}>Increment By 7</button>
    </div>
  );
}

export default Counter;
