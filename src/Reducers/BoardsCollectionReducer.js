import {
  STORE_NEW_BOARD_TO_COLLECTION,
  DELETE_BOARD_COLLECTION,
} from "~Actions/ActionTypes";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_NEW_BOARD_TO_COLLECTION:
      return [...state, action.payload];

    case DELETE_BOARD_COLLECTION:
      return [];

    default:
      return state;
  }
}
