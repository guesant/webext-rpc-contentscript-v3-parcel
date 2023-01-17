import { IPayloadPing, IPayloadSum } from "../IPayloads";
import { invokeAction } from "../shared/rpc";
import { injectServer } from "./inject-server";

const main = async () => {
  console.log("client: started");

  await injectServer();

  console.log("client: ready");

  const resultPing = await invokeAction<IPayloadPing>({ type: "ping" });
  console.log("ping", resultPing);

  const resultSum = await invokeAction<IPayloadSum>({ type: "sum", data: [2, 2] });
  console.log("sum", resultSum);
};

main();
