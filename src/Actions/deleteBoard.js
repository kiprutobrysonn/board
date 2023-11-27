// actions.js\
import { DELETE_BOARD } from "./ActionTypes";

export const deleteBoard = (boardId) => ({
  type: DELETE_BOARD,
  payload: { boardId },
});
