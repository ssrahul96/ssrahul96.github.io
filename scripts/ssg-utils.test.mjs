import { expect, test } from "bun:test";
import path from "node:path";
import {
  injectRenderedHtml,
  outputPathForRoute,
  PRERENDER_ROUTES,
} from "./ssg-utils.mjs";

test("injectRenderedHtml replaces root app markup", () => {
  const template = `<!doctype html><html><head><title>Base</title></head><body><div id="root"><main>fallback</main></div></body></html>`;
  const html = injectRenderedHtml(template, "<section>rendered</section>", "");

  expect(html).toContain('<div id="root"><section>rendered</section></div>');
  expect(html).not.toContain("fallback");
});

test("injectRenderedHtml appends head markup before closing head", () => {
  const template = `<!doctype html><html><head><meta charset="utf-8"></head><body><div id="root"></div></body></html>`;
  const html = injectRenderedHtml(
    template,
    "<div>ok</div>",
    '<title>Injected</title><meta name="description" content="x">'
  );

  expect(html).toContain(
    '<meta charset="utf-8"><title>Injected</title><meta name="description" content="x"></head>'
  );
});

test("outputPathForRoute resolves index route correctly", () => {
  const out = outputPathForRoute("/tmp/dist", "/");
  expect(out).toBe(path.join("/tmp/dist", "index.html"));
});

test("outputPathForRoute resolves nested route correctly", () => {
  const out = outputPathForRoute("/tmp/dist", "/resume");
  expect(out).toBe(path.join("/tmp/dist", "resume", "index.html"));
});

test("prerender route list includes home and resume", () => {
  expect(PRERENDER_ROUTES).toEqual(["/", "/resume"]);
});
