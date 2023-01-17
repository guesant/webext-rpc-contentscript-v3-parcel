import { IRPCMessagePayload } from "./shared/rpc/interfaces";

export type IPayloadPing = IRPCMessagePayload<"ping", void, string>;

export type IPayloadSum = IRPCMessagePayload<"sum", number[], number>;

export type IPayload = IPayloadPing | IPayloadSum;
