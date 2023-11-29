import { ARCHIVE_POST, EDIT_POST_TITLE } from "./ActionTypes";

export default function archiveCard(cardId, listId) {
  return (dispatch) => {
    dispatch({ type: ARCHIVE_POST, payload: { cardId, listId } });
  };
}

export const editPostTitle = (cardId, listId, newTitle) => ({
  type: EDIT_POST_TITLE,
  payload: { cardId, listId, newTitle },
});
