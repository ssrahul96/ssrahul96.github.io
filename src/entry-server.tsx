import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import "@fontsource-variable/inter";
import "./index.css";

export type RenderResult = {
  appHtml: string;
  headHtml: string;
};

export function render(url: string): RenderResult {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const headHtml = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join("");

  return { appHtml, headHtml };
}
