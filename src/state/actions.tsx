import { ActionType } from "./action-types";

interface IAddItemAction {
  type: ActionType.ADDITEM;
  itemType: "notes" | "sites" | "todos";
  _id: string;
  creator: string;
  title: string;
  body: string;
}

interface IRemoveItemAction {
  type: ActionType.REMOVEITEM;
  title: string;
  itemType: "notes" | "sites" | "todos";
}

interface ISetStatusAction {
  type: ActionType.SETSTATUS;
  title: string;
  itemType: "notes" | "sites" | "todos";
}

interface IFetchItemsAction {
  type: ActionType.FETCHITEMS;
  items: {
    notes: Array<{
      itemType: string;
      title: string;
      body: string;
    }>;
    todos: Array<{
      itemType: string;
      title: string;
      body: string;
    }>;
    sites: Array<{
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
