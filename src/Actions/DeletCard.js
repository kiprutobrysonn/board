import { DELETE_CARD } from "./ActionTypes";

export const deleteCard = (cardId, listId) => ({
  type: DELETE_CARD,
  payload: {
    cardId,
    listId,
  },
});
