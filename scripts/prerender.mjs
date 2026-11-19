// Injeta o HTML pré-renderizado da página inicial em dist/index.html.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distIndex = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");
const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
if (!entry) throw new Error("entry-server build não encontrado em dist-ssr/");

const { render } = await import(pathToFileURL(path.join(ssrDir, entry)).href);
const appHtml = render();
const template = fs.readFileSync(distIndex, "utf8");
if (!template.includes("<!--app-html-->")) throw new Error("Marcador <!--app-html--> em falta em index.html");

fs.writeFileSync(distIndex, template.replace("<!--app-html-->", appHtml));
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pré-renderização concluída (${(appHtml.length / 1024).toFixed(1)} KB de HTML).`);
