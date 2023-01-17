import { IRPCMessage, IRPCMessagePayload } from "../interfaces";

export const handleMessages = <
  P extends IRPCMessagePayload = IRPCMessagePayload,
  M extends IRPCMessage<P> = IRPCMessage<P>
>(
  condition: Partial<Pick<M, "step" | "id">>,
  callback: (message: M) => void
) => {
  return (event: MessageEvent<unknown>) => {
    const kind: string | undefined = (event.data as any)?.kind;

    if (kind !== "rpc") {
      return;
    }

    const message = event.data as M;

    if ((condition.id && condition.id !== message.id) || (condition.step && condition.step !== message.step)) {
      return;
    }

    callback(message);
  };
};

// export const handleMessage = (callback: () => void) => {
//   return (event: MessageEvent<unknown>) => {
//     const data = event.data as IMessage;

//     if (
//       (event.data as any)?.kind === "rpc" &&

//     ) {
//       callback(data.result);
//     }
//   };
// };
