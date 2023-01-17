import browser from "webextension-polyfill";
import { invokeAction } from "../shared/rpc";
import { waitReady } from "../shared/rpc/waitReady";
import { injectScript } from "./utils/injectScript";

const main = async () => {
  console.log("client: started");

  await Promise.all([
    waitReady(),
    injectScript(browser.runtime.getURL("ContentScript/server/bundle.js")),
  ]);

  console.log("client: ready");

  console.log("ping", await invokeAction("ping"));
};

main();
