import { handleMessages } from "./utils/handleMessage";
import {
  IRPCMessage,
  STEP_RESPONSE,
  IRPCMessageRequest,
  STEP_REQUEST,
  IRPCMessageResponse,
} from "./utils/tokens";

export const invokeAction = <Result>(action: string, payload?: any) => {
  const id = Math.random().toString();

  return new Promise<Result>((resolve) => {
    const handleResponse = handleMessages<IRPCMessageResponse>(
      { step: STEP_RESPONSE, id },
      (message) => {
        window.removeEventListener("message", handleResponse);
        resolve(message.result);
      }
    );

    window.addEventListener("message", handleResponse);

    const request: IRPCMessageRequest = {
      id,
      action,
      payload,
      kind: "rpc",
      step: STEP_REQUEST,
    };

    window.postMessage(request);
  });
};
