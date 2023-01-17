export const injectScript = (file: string, target: string = "body") =>
  new Promise<void>((resolve) => {
    const el = document.querySelector(target);

    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", file);

    script.addEventListener("load", () => void resolve());

    el.appendChild(script);
  });
