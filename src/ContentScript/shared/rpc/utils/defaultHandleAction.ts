import { IPayload } from "../../../IPayloads";
import { IHandleAction } from "../interfaces";

export const defaultHandleAction: IHandleAction<IPayload> = async (payload) => {
  switch (payload.type) {
    case "ping": {
      return "pong";
    }

    default: {
      return "not implemented";
    }
  }
};
