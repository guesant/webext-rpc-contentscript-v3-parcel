let waitReadyPromise: Promise<void> | null = null;

export const waitReady = () => {
  if (!waitReadyPromise) {
    waitReadyPromise = new Promise<void>((resolve) => {
      const handleRPCReady = (event: MessageEvent) => {
        const data = event.data;

        if (data?.kind === "rpc" && data.status === "ready") {
          window.removeEventListener("message", handleRPCReady);
          resolve();
        }
      };

      window.addEventListener("message", handleRPCReady);
    });
  }

  return waitReadyPromise;
};
