// GTA 6 Clipper entry — main.ts (Node 22, stdlib only)
//
// The entrypoint for the gta6-clipper-01 bounty. The entry itself is a
// public YouTube Short; this program's only job is to hand VIDEO.json
// (which names the video) to the grader by copying it into the output
// directory. The house reads the video itself through the YouTube Data
// API, so nothing this program writes about the video counts.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

try {
  if (!existsSync(source)) {
    throw new Error(`VIDEO.json not found at ${source}`);
  }
  // Validate the payload before handing it to the grader: it must be a
  // JSON object with a url string, otherwise the entry is invalid.
  const parsed = JSON.parse(readFileSync(source, "utf8"));
  if (!parsed || typeof parsed !== "object" || typeof parsed.url !== "string") {
    throw new Error(`VIDEO.json must be a JSON object with a "url" string`);
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
  console.log(`Copied ${source} -> ${target} (${parsed.url})`);
} catch (err) {
  console.error(`main.ts failed: ${err instanceof Error ? err.message : err}`);
  process.exit(1);
}
