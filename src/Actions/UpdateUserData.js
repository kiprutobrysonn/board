import { UPDATE_USER_DATA } from "./ActionTypes";

export const updateUserData = (newData) => ({
  type: UPDATE_USER_DATA,
  payload: { newData },
});
