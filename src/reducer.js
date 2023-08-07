import { useReducer } from "react";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: new Map(),
    };
  }
  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
