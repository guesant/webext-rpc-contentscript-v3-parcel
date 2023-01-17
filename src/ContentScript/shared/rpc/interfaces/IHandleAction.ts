import { InferResult } from "./InferResult";
import { IRPCMessagePayload } from "./IRPCMessagePayload";

export type IHandleAction<
  P extends IRPCMessagePayload = IRPCMessagePayload,
  R extends InferResult<P> = InferResult<P>
> = (payload: P) => Promise<R>;
