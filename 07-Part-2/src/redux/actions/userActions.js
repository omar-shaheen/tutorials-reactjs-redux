import { ADD_USER } from "./types"

export const addUser = async (dispatch) => {
  return dispatch({
    type: ADD_USER
  })
}