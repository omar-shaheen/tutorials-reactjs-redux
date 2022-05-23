import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types";

export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

export const incByValueAction = (vl) => {
  return {
    type: INC_BY_VALUE,
    payload: vl,
  };
};
