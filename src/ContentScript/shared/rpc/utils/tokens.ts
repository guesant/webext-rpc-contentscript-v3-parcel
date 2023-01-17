export const STEP_REQUEST = "REQUEST";

export const STEP_RESPONSE = "RESPONSE";

export type IRPCMessage = IRPCMessageRequest | IRPCMessageResponse;

export type IHandleAction = (action: string, payload?: any) => Promise<any>;

export type ICloneObject = (data: any) => any;

export type IRPCBase = {
  kind: "rpc";
};

export type IRPCReady = IRPCBase & {
  status: "ready";
};

export type IRPCMessageBase = IRPCBase & {
  step: unknown;
  id: string;
  action: string;
  payload: any;
};

export type IRPCMessageRequest = IRPCMessageBase & {
  step: typeof STEP_REQUEST;
};

export type IRPCMessageResponse = IRPCMessageBase & {
  step: typeof STEP_RESPONSE;

  result: any;
};
