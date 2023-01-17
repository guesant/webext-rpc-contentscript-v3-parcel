import { IRPCMessagePayload } from "./IRPCMessagePayload";
import { IRPCMessageRequest } from "./IRPCMessageRequest";
import { IRPCMessageResponse } from "./IRPCMessageResponse";

export type IRPCMessage<P extends IRPCMessagePayload> =
  | IRPCMessageRequest<P>
  | IRPCMessageResponse<P>;
