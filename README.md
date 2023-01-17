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

console.log("ping", await invokeAction({ type: "ping" }));
// output: ping pong

console.log("sum", await invokeAction({ type: "sum", data: [2, 2] }));
// output: sum 4
```

#### ContentScript/server

Main: [`src/ContentScript/server/main.ts`](src/ContentScript/server/main.ts).

This script have access to the page window API.

---

Handle Actions util: [`src/ContentScript/server/handleActions.ts`](src/ContentScript/server/handleActions.ts).

```ts
// src/ContentScript/server/handleActions.ts

export const handleActions = async (payload) => {
  switch (payload.type) {
    case "ping": {
      return "pong";
    }

    case "sum": {
      return payload.data.reduce((acc, i) => acc + i, 0);
    }

    default: {
      return "not implemented";
    }
  }
};
```
