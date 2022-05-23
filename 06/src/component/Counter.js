import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incByValueAction,
  incrementAction,
} from "../redux/actions/counterActions";

function Counter() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCount(count + 1);
    // dispatch({
    //   type: INCREMENT
    // });
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    // dispatch({
    //   type: DECREMENT
    // });
    dispatch(decrementAction());
  };

  const handleIncrementByValue = (vl) => {
    dispatch(incByValueAction(vl));
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
