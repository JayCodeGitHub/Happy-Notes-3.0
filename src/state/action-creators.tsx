import { ActionType } from "./action-types";
import { Dispatch } from "redux";

export const addItem = (itemType: string, title: string, body?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDITEM,
      itemType,
      title,
      body,
    });
  };
};

export const removeItem = (title: string, itemType: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVEITEM,
      title,
      itemType,
    });
  };
};

export const fetchItems = () => {};
