import { v1 } from "uuid";

enum Type {
  SEND_MESSAGE = "dialogs/SEND-MESSAGE",
}

export type DialogsType = {
  id: string;
  name: string;
};
export type MessagesType = {
  id: string;
  message: string;
};

export type InitialStateType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
};

const initialState = {
  dialogs: [
    { id: v1(), name: "Kirril" },
    { id: v1(), name: "Anton" },
    { id: v1(), name: "Pikachu" },
    { id: v1(), name: "Nehachu" },
    { id: v1(), name: "Jim" },
  ],
  messages: [
    { id: v1(), message: "WOW" },
    { id: v1(), message: "Goood" },
    { id: v1(), message: "Awesome" },
  ],
};

const dialogsReducer = (
  state: InitialStateType = initialState,
  action: DialogsActionType
): InitialStateType => {
  switch (action.type) {
    case Type.SEND_MESSAGE: {
      const newMessage: MessagesType = {
        id: v1(),
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: Type.SEND_MESSAGE,
    newMessageBody,
  } as const;
};

export type DialogsActionType = ReturnType<typeof sendMessageAC>;

export default dialogsReducer;
