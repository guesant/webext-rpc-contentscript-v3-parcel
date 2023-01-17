import { defaultHandleAction } from "./utils/defaultHandleAction";
import {
  IHandleAction,
  IRPCMessage,
  STEP_RESPONSE,
  STEP_REQUEST,
  IRPCMessageResponse,
  ICloneObject,
  IRPCMessageRequest,
} from "./utils/tokens";
import { defaultCloneObject } from "./utils/defaultCloneObject";
import { handleMessages } from "./utils/handleMessage";

export const listenToActions = (
  handleAction: IHandleAction = defaultHandleAction,
  cloneObject: ICloneObject = defaultCloneObject
) => {
  const handleRequest = handleMessages<IRPCMessageRequest>(
    { step: STEP_REQUEST },
    async (data) => {
      const result = cloneObject(await handleAction(data.action, data.payload));

      const response: IRPCMessageResponse = {
        ...data,
        result,
        step: STEP_RESPONSE,
      };

      window.postMessage(response);
    }
  );

  window.addEventListener("message", handleRequest);

  return () => {
    window.removeEventListener("message", handleRequest);
  };
};
