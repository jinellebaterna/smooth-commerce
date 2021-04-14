import axios from "axios";

export const SET_BUSINESSES  = "SET_BUSINESSES";

export function fetchBusinessList() {
  return async dispatch => {
    try {
      const response = await axios.get("https://smoothcommerce.tech/api.json")
      dispatch(setBusinesses(response.data));
    } catch {
      // call action that sets loading = false, errormessage
    }
  };
}

function setBusinesses(businesses) {
  return {
    type: SET_BUSINESSES,
    payload: businesses
  };
}
