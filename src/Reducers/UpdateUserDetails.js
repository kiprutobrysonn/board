import { UPDATE_USER_DATA } from "../Actions/ActionTypes";

const INITIAL_STATE = {
  userData: "",
};
const userDataReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA: {
      return {
        ...state,
        userData: action.payload.newData,
      };
    }

    default:
      return state;
  }
};

export default userDataReducer;
