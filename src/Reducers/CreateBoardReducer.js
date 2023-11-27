import uniqueId from "lodash/uniqueId";

import {
  CREATE_NEW_BOARD,
  CANCEL_NEW_BOARD,
  SUBMIT_NEW_BOARD,
  DELETE_BOARD,
} from "~Actions/ActionTypes";

const initialState = {
  isBoardOpen: false,
  title: null,
  id: null,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_BOARD:
      var newBoard = {
        id: uniqueId(""),
        title: action.payload,
        lists: [
          { id: uniqueId(""), name: "TODO", cards: [] },
          { id: uniqueId(""), name: "INPROGRESS", cards: [] },
          { id: uniqueId(""), name: "COMPLETED", cards: [] },
        ],
      };
      return {
        ...state,
        title: null,
        isBoardOpen: true,
        id: null,
        success: false,
        newBoard,
      };

    case CANCEL_NEW_BOARD:
      return {
        ...state,
        title: null,
        isBoardOpen: false,
        id: null,
        success: false,
      };

    case SUBMIT_NEW_BOARD:
      return {
        ...state,
        isBoardOpen: false,
        title: action.payload,
        id: uniqueId(""),
      };
    case DELETE_BOARD:
      if (state.id === action.payload.boardId) {
        return {
          ...initialState, // Reset to initial state
        };
      }
      return state;

    default:
      return state;
  }
}
