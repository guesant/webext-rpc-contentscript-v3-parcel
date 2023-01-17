import { listenToActions } from "../shared/rpc";
import { handleActions } from "./handleActions";

const setup = async () => {
  console.log("server: started");

  listenToActions(handleActions);

  window.postMessage({ kind: "rpc", status: "ready" });
  console.log("server: ready");
};

setup();
