import { IPayload } from "../IPayloads";
import { IHandleAction } from "../shared/rpc/interfaces";

export const handleActions: IHandleAction<IPayload> = async (payload) => {
  switch (payload.type) {
    case "ping": {
      return "pong";
    }

    case "sum": {
      return payload.data.reduce((acc, i) => acc + i, 0);
    }

    default: {
      return "not implemented";
    }
  }
};
