export type IRPCMessagePayloadOld<
  T extends string,
  D extends any = void,
  _R extends any = unknown
> = {
  type: T;
  data?: D;
  readonly R: _R;
};

export class IRPCMessagePayload<
  Type = unknown,
  Data = unknown,
  Return = unknown
> {
  type: Type;
  data?: Data;
}
