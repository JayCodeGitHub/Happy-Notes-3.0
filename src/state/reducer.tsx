import { Action } from "./actions";
import { ActionType } from "./action-types";

const initialState = {
  note: [
    {
      itemType: "note",
      title: "",
      body: "",
    },
  ],
  todo: [
    {
      itemType: "todo",
      title: "",
      body: "",
    },
  ],
  site: [
    {
      itemType: "site",
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
        todo: state.todo.map((todo) => {
          if (todo.title === action.title) {
            if (todo.body === "todo" || todo.body === "") {
              return {
                ...todo,
                body: "done",
              };
            } else if (todo.body === "done") {
              return {
                ...todo,
                body: "todo",
              };
            }
          }
          return todo;
        }),
      };

    case ActionType.FETCHITEMS:
      return {
        ...state,
        note: action.items.note,
        todo: action.items.todo,
        site: action.items.site,
      };
    default:
      return state;
  }
};

export default Reducer;

export type State = ReturnType<typeof Reducer>;
