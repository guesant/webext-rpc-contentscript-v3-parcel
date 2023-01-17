# webext-rpc-contentscript-v3-parcel

Web Extension (manifest v3) template that implements a high level API for comunication between content script and page using window.postMessage.

## Development

### Getting the source code

```sh
git clone https://github.com/legacybiel/webext-rpc-contentscript-v3-parcel.git
cd webext-rpc-contentscript-v3-parcel
```

```sh
npm install
```

### Development scripts

```sh
npm run start
```

```sh
npm run build
```

Output directory: `dist`.

### Usage

#### ContentScript/client

Main: [`src/ContentScript/client/main.ts`](src/ContentScript/client/main.ts).

This script have access to the `chrome` and `browser` APIS.

```ts
// src/ContentScript/client/main.ts

const result = await invokeAction("ping");
console.log(result); // output: pong
```

#### ContentScript/server

Main: [`src/ContentScript/server/main.ts`](src/ContentScript/server/main.ts).

This script have access to the page window API.

---

Handle Actions util: [`src/ContentScript/server/handleActions.ts`](src/ContentScript/server/handleActions.ts).

```ts
// src/ContentScript/server/handleActions.ts

export const handleActions: IHandleAction = async (
  action: string,
  payload?: any
) => {
  console.log("server: got action", { action: action, payload: payload });

  switch (action) {
    case "ping": {
      return "pong";
    }

    default: {
      return "not implemented";
    }
  }
};
```
