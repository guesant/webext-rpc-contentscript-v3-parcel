import { ICloneObject } from "./tokens";

export const defaultCloneObject: ICloneObject = (data: any) =>
  JSON.parse(JSON.stringify(data));
