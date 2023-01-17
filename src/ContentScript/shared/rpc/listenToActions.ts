import { defaultHandleAction } from "./utils/defaultHandleAction";
import {
  InferResult,
  IRPCMessagePayload,
  IRPCMessageRequest,
  IRPCMessageResponse,
  STEP_REQUEST,
  STEP_RESPONSE,
} from "./interfaces";
import { ICloneObject } from "./interfaces/ICloneObject";
import { IHandleAction } from "./interfaces/IHandleAction";
import { defaultCloneObject } from "./utils/defaultCloneObject";
import { handleMessages } from "./utils/handleMessage";

export const listenToActions = (
  handleAction: IHandleAction = defaultHandleAction,
  cloneObject: ICloneObject = defaultCloneObject
) => {
  const handleRequest = handleMessages(
    { step: STEP_REQUEST },
    async <P extends IRPCMessagePayload, R extends InferResult<P>>(message: IRPCMessageRequest<P>) => {
      const result = cloneObject(await handleAction(message.payload)) as R;

      const response: IRPCMessageResponse<P> = {
        ...message,
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
