import { ICloneObject } from "../interfaces";

export const defaultCloneObject: ICloneObject = (data) =>
  JSON.parse(JSON.stringify(data));
