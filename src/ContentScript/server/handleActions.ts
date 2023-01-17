import { IHandleAction } from "../shared/rpc/utils/tokens";

export const handleActions: IHandleAction = async (
  action: string,
  payload?: any
) => {
  console.log("server: got action", { action: action, payload: payload });

  switch (action) {
    case "ping": {
      return "pong";
    }

    default: {
      return "not implemented";
    }
  }
};
