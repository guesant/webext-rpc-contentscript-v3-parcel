import { IPayload } from "../../IPayloads";
import {
  InferResult,
  IRPCMessagePayload,
  IRPCMessageRequest,
  IRPCMessageResponse,
  STEP_REQUEST,
  STEP_RESPONSE,
} from "./interfaces";
import { handleMessages } from "./utils/handleMessage";

export const invokeAction = <
  P extends IRPCMessagePayload,
  R extends InferResult<P> = InferResult<P>
>(
  payload: P
): Promise<R> => {
  const id = Math.random().toString();

  return new Promise<R>((resolve) => {
    const handleResponse = handleMessages(
      { step: STEP_RESPONSE, id },
      (message: IRPCMessageResponse<P>) => {
        window.removeEventListener("message", handleResponse);
        const result = message.result as R;
        resolve(result);
      }
    );

    window.addEventListener("message", handleResponse);

    const request: IRPCMessageRequest<P> = {
      id,
      payload,
      kind: "rpc",
      step: STEP_REQUEST,
    };

    window.postMessage(request);
  });
};
