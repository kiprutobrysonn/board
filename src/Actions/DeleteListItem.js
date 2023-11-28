import { DELETE_CARD } from "./ActionTypes";

export const deleteListItem = (listId) => ({
  type: DELETE_CARD,
  payload: {
    listId,
  },
});
