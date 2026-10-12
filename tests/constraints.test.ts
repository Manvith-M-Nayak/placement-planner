// Guards the product constraints: no persistence, no tracking, no backend.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { resources } from "../src/data/resources.ts";
import { careers } from "../src/data/careers/index.ts";

const root = new URL("..", import.meta.url).pathname;
const src = join(root, "src");

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? files(p) : [p];
  });
}
const sourceFiles = files(src).filter((f) => /\.(ts|tsx|js|jsx|css)$/.test(f));

test("no browser storage, cookies, or network calls in application code", () => {
  const banned = [/localStorage/, /sessionStorage/, /indexedDB/i, /document\.cookie/, /\bfetch\(/, /XMLHttpRequest/, /sendBeacon/, /new WebSocket/, /new EventSource/];
  for (const f of sourceFiles) {
    const text = readFileSync(f, "utf8");
    for (const re of banned) assert.ok(!re.test(text), `${f} matches ${re}`);
  }
});

test("no backend: no route handlers, server actions, middleware, or proxy", () => {
  const routeHandlers = sourceFiles.filter((f) => /[/\\]route\.(ts|js)$/.test(f));
  assert.deepEqual(routeHandlers, []);
  assert.ok(!existsSync(join(src, "app", "api")));
  for (const name of ["middleware.ts", "proxy.ts", "src/middleware.ts", "src/proxy.ts"]) {
    assert.ok(!existsSync(join(root, name)), `${name} should not exist`);
  }
  for (const f of sourceFiles) assert.ok(!readFileSync(f, "utf8").includes('"use server"'), `${f} uses server actions`);
});

test("no analytics or tracking dependencies", () => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  const deps = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).join(" ");
  assert.ok(!/analytics|gtag|segment|mixpanel|posthog|amplitude|hotjar|sentry/i.test(deps), deps);
  for (const f of sourceFiles) {
    assert.ok(!/googletagmanager|google-analytics|plausible|<Script/.test(readFileSync(f, "utf8")), `${f} loads a tracking script`);
  }
});

test("no progress tracking or readiness scoring UI", () => {
  for (const f of sourceFiles.filter((x) => x.endsWith(".tsx"))) {
    const text = readFileSync(f, "utf8");
    assert.ok(!/<progress|role="progressbar"|% complete|readiness score|streak/i.test(text), `${f} looks like progress tracking`);
  }
});

test("resources have valid topics, careers, and https links", () => {
  const slugs = new Set(careers.map((c) => c.slug));
  const names = new Set<string>();
  for (const r of resources) {
    assert.ok(!names.has(r.name), `duplicate resource ${r.name}`);
    names.add(r.name);
    if (r.url) assert.match(r.url, /^https:\/\//);
    for (const c of r.careers) assert.ok(slugs.has(c), `${r.name} references unknown career ${c}`);
  }
});
