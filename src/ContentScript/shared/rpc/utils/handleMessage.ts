import { IRPCMessage, IRPCMessageBase } from "./tokens";

export const handleMessages = <Message extends IRPCMessageBase>(
  condition: Partial<Pick<IRPCMessage, "step" | "id">>,
  callback: (message: Message) => void
) => {
  return (event: MessageEvent<unknown>) => {
    const kind: string | undefined = (event.data as any)?.kind;

    if (kind !== "rpc") {
      return;
    }

    const message = event.data as Message;

    if (
      (condition.id && condition.id !== message.id) ||
      (condition.step && condition.step !== message.step)
    ) {
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
