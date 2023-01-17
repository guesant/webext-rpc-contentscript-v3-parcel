import { IRPCBase } from "./IRPCBase";
import { IRPCMessagePayload } from "./IRPCMessagePayload";

export type IRPCMessageBase<
  P extends IRPCMessagePayload,
  S extends "REQUEST" | "RESPONSE" = "REQUEST" | "RESPONSE"
> = IRPCBase & {
  id: string;
  payload: P;
  step: S;
};
