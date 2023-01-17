import { IRPCMessagePayload } from "./IRPCMessagePayload";

export type InferResult<P> = P extends IRPCMessagePayload<any, any, infer R>
  ? R
  : never;
