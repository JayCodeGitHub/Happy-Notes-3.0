import { ActionType } from "./action-types";

interface IAddItemAction {
  type: ActionType.ADDITEM;
  itemType: "note" | "site" | "todo";
  title: string;
  body: string;
}

interface IRemoveItemAction {
  type: ActionType.REMOVEITEM;
  title: string;
  itemType: "note" | "site" | "todo";
}

interface ISetStatusAction {
  type: ActionType.SETSTATUS;
  title: string;
  itemType: "note" | "site" | "todo";
}

interface IFetchItemsAction {
  type: ActionType.FETCHITEMS;
  items: {
    note: Array<{
      itemType: string;
      title: string;
      body: string;
    }>;
    todo: Array<{
      itemType: string;
      title: string;
      body: string;
    }>;
    site: Array<{
      itemType: string;
      title: string;
      body: string;
    }>;
  };
}

export type Action =
  | IAddItemAction
  | IRemoveItemAction
  | ISetStatusAction
  | IFetchItemsAction;
