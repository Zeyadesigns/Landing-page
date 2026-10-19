#!/usr/bin/env node
// Derives the Finestkraft spacing and type scales by clustering the raw values
// found in the incumbent hero CSS (design/incumbent/*.css).
//
//   node scripts/cluster-tokens.mjs            # prints a report
//   node scripts/cluster-tokens.mjs --write    # also writes design/tokens.clusters.json
//
// Method: collect every px value per property family, then run 1-D k-means in
// log space (sizes are perceived as ratios, not differences). k is chosen by the
// best mean silhouette; centroids are snapped to the 4px grid (2px under 16px).

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const sources = ["design/incumbent/globals.css", "design/incumbent/hero.module.css"];
const css = sources.map((f) => readFileSync(join(root, f), "utf8")).join("\n");

const FAMILIES = {
  space: /^(padding|padding-top|padding-bottom|margin|margin-top|margin-left|gap|--gutter|--chamfer|height|inset)$/,
  type: /^font-size$/,
};

function collect() {
  const out = { space: [], type: [] };
  const decl = /([a-z-]+)\s*:\s*([^;{}]+);/g;
  let m;
  while ((m = decl.exec(css))) {
    const [, prop, value] = m;
    const px = [...value.matchAll(/(-?\d+(?:\.\d+)?)px/g)].map((x) => Math.abs(Number(x[1])));
    for (const [family, re] of Object.entries(FAMILIES)) {
      if (re.test(prop)) out[family].push(...px.filter((v) => v > 0 && v < 400));
    }
  }
  return out;
}

function kmeans(values, k) {
  const xs = values.map(Math.log).sort((a, b) => a - b);
  // deterministic init at evenly spaced quantiles
  let c = Array.from({ length: k }, (_, i) => xs[Math.round(((i + 0.5) / k) * (xs.length - 1))]);
  let assign = [];
  for (let iter = 0; iter < 100; iter++) {
    assign = xs.map((x) => c.reduce((best, ci, i) => (Math.abs(x - ci) < Math.abs(x - c[best]) ? i : best), 0));
    const next = c.map((ci, i) => {
      const members = xs.filter((_, j) => assign[j] === i);
      return members.length ? members.reduce((a, b) => a + b, 0) / members.length : ci;
    });
    if (next.every((v, i) => Math.abs(v - c[i]) < 1e-9)) break;
    c = next;
  }
  return { xs, centroids: c, assign };
}

function silhouette({ xs, assign }, k) {
  if (k < 2) return -1;
  let total = 0;
  xs.forEach((x, i) => {
    const own = xs.filter((_, j) => j !== i && assign[j] === assign[i]);
    if (!own.length) return;
    const a = own.reduce((s, y) => s + Math.abs(x - y), 0) / own.length;
    let b = Infinity;
    for (let c = 0; c < k; c++) {
      if (c === assign[i]) continue;
      const other = xs.filter((_, j) => assign[j] === c);
      if (other.length) b = Math.min(b, other.reduce((s, y) => s + Math.abs(x - y), 0) / other.length);
    }
    total += (b - a) / Math.max(a, b);
  });
  return total / xs.length;
}

const snap = (v) => (v < 16 ? Math.round(v / 2) * 2 : Math.round(v / 4) * 4);

function scale(values, maxK) {
  const unique = [...new Set(values)];
  let best = null;
  for (let k = 2; k <= Math.min(maxK, unique.length - 1); k++) {
    const run = kmeans(values, k);
    const score = silhouette(run, k);
    if (!best || score > best.score) best = { k, score, run };
  }
  const { run } = best;
  const clusters = run.centroids
    .map((ci, i) => ({
      centroid: Math.exp(ci),
      members: [...new Set(run.xs.filter((_, j) => run.assign[j] === i).map((x) => Math.round(Math.exp(x))))],
    }))
    .filter((c) => c.members.length)
    .sort((a, b) => a.centroid - b.centroid)
    .map((c) => ({ ...c, token: snap(c.centroid) }));
  return { k: best.k, silhouette: Number(best.score.toFixed(3)), clusters };
}

const raw = collect();
const report = {
  source: sources,
  space: scale(raw.space, 8),
  type: scale(raw.type, 6),
};

for (const family of ["space", "type"]) {
  const r = report[family];
  console.log(`\n${family}: k=${r.k}, silhouette=${r.silhouette}`);
  for (const c of r.clusters) console.log(`  ${String(c.token).padStart(4)}px  ← ${c.members.join(", ")}`);
}

if (process.argv.includes("--write")) {
  writeFileSync(join(root, "design/tokens.clusters.json"), JSON.stringify(report, null, 2) + "\n");
  console.log("\nwrote design/tokens.clusters.json");
}
