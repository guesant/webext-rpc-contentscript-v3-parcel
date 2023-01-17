import browser from "webextension-polyfill";
import { waitReady } from "../shared/rpc/waitReady";
import { injectScript } from "./utils/injectScript";

export const injectServer = () =>
  Promise.all([waitReady(), injectScript(browser.runtime.getURL("ContentScript/server/bundle.js"))]);
