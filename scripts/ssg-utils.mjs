import path from "node:path";

export const PRERENDER_ROUTES = ["/", "/resume"];

export function injectRenderedHtml(template, appHtml, headHtml) {
  const withApp = template.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${appHtml}</div>`
  );
  return withApp.replace("</head>", `${headHtml}</head>`);
}

export function outputPathForRoute(distDir, route) {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }

  const trimmed = route.replace(/^\/+|\/+$/g, "");
  return path.join(distDir, trimmed, "index.html");
}
