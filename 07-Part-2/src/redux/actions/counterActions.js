import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types";

// Redux Thunk => async (dispatch)
export const incrementAction = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};

// Redux Thunk => async (dispatch)
export const decrementAction = async (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};

export const incByValueAction = (vl, dispatch) => {
  return dispatch({
    type: INC_BY_VALUE,
    payload: vl,
  });
};
