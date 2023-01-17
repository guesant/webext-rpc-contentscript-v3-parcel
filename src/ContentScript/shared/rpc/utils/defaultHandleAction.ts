import { IHandleAction } from "./tokens";

export const defaultHandleAction: IHandleAction = async (
  action: string,
  payload: any
) => {
  switch (action) {
    default: {
      console.log({ action, payload });
      return "pong";
    }
  }
};
