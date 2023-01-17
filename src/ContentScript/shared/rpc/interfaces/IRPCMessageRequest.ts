import { IRPCMessageBase } from "./IRPCMessageBase";
import { IRPCMessagePayload } from "./IRPCMessagePayload";

export const STEP_REQUEST = "REQUEST";
export type STEP_REQUEST = typeof STEP_REQUEST;

export type IRPCMessageRequest<P extends IRPCMessagePayload> = IRPCMessageBase<
  P,
  STEP_REQUEST
>;
