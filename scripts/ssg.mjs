import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  injectRenderedHtml,
  outputPathForRoute,
  PRERENDER_ROUTES,
} from "./ssg-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const distDir = path.join(repoRoot, "dist");
const serverBundlePath = path.join(repoRoot, "dist-ssr", "entry-server.js");

async function loadRenderer() {
  const serverBundleUrl = pathToFileURL(serverBundlePath).href;
  const serverModule = await import(serverBundleUrl);
  if (typeof serverModule.render !== "function") {
    throw new Error("SSR bundle does not export a render(url) function.");
  }
  return serverModule.render;
}

async function writePreRenderedRoute(template, route, render) {
  const { appHtml, headHtml } = render(route);
  const html = injectRenderedHtml(template, appHtml, headHtml);
  const outputPath = outputPathForRoute(distDir, route);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, "utf-8");
}

async function run() {
  const templatePath = path.join(distDir, "index.html");
  const template = await fs.readFile(templatePath, "utf-8");
  const render = await loadRenderer();

  await Promise.all(
    PRERENDER_ROUTES.map((route) => writePreRenderedRoute(template, route, render))
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
