import { Action } from "./actions";
import { ActionType } from "./action-types";

const initialState = {
  notes: [
    {
      itemType: "notes",
      title: "",
      body: "",
    },
  ],
  todos: [
    {
      itemType: "todos",
      title: "",
      body: "",
    },
  ],
  sites: [
    {
      itemType: "sites",
      title: "",
      body: "",
    },
  ],
};

const Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDITEM:
      return {
        ...state,
        [action.itemType]: [
          ...state[action.itemType],
          {
            itemType: action.itemType,
            creator: action.creator,
            title: action.title,
            body: action.body,
          },
        ],
      };
    case ActionType.REMOVEITEM:
      return {
        ...state,
        [action.itemType]: [
          ...state[action.itemType].filter(
            (item) => item.title !== action.title
          ),
        ],
      };
    case ActionType.SETSTATUS:
      return {
        ...state,
      };
    case ActionType.FETCHITEMS:
      return {
        ...state,
        notes: action.notes,
        todos: action.todos,
        sites: action.sites,
      };
    default:
      return state;
  }
};

export default Reducer;

export type State = ReturnType<typeof Reducer>;
