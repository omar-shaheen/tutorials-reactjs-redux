import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../actions/types";

function Counter() {
  // const [count, setCount] = useState(0);

  // const count = useSelector(state => state.count)
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT
    });
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT
    });
  };

  return (
    <div className="Counter">
      <h3>Counter App</h3>
      <h4> {count} </h4>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
