import {
  opine,
  React,
  ReactDOMServer,
  Request,
  Response,
  NextFunction,
} from "./dep.ts";

import App from "./app.tsx";

const app = opine();
const browserBundlePath = "/browser.js";

const js =
  `import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.body);`;

const html =
  `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body>${
    (ReactDOMServer as any).renderToString(<App />)
  }</body></html>`;

app.use(
  browserBundlePath,
  (req: Request, res: Response, next: NextFunction) => {
    res.type("application/javascript").send(js);
  },
);

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.type("text/html").send(html);
});

app.listen({ port: 3000 });

console.log("React SSR App listening on port 3000");
