import { InferResult } from "./InferResult";
import { IRPCMessageBase } from "./IRPCMessageBase";
import { IRPCMessagePayload } from "./IRPCMessagePayload";

export const STEP_RESPONSE = "RESPONSE";
export type STEP_RESPONSE = typeof STEP_RESPONSE;

export type IRPCMessageResponse<
  P extends IRPCMessagePayload,
  R extends InferResult<P> = InferResult<P>
> = IRPCMessageBase<P, STEP_RESPONSE> & {
  result: R;
};
