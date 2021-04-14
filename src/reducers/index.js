import { SET_BUSINESSES } from "../actions";

let initialState = {
  data: []
};

const mainReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  if (type === SET_BUSINESSES) {
    return {
      ...state,
      data: payload
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
