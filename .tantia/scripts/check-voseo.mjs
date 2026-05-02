#!/usr/bin/env node
/**
 * Voseo scanner. Reusable across any Tantia repo with Spanish UI / copy.
 *
 * Walks the configured roots and reports voseo argentino in the file
 * contents. Voseo is forbidden brand-wide — Mexican-neutral tuteo only.
 *
 * Usage:
 *   tantia-check-voseo [--root <path>] [--ext json,ts,tsx,mdx,md] [--allow <substr>]
 *
 * Defaults:
 *   --root messages  (typical i18n catalog folder)
 *   --root content   (typical published prose folder)
 *   --ext json,mdx,md
 *
 * Exit codes:
 *   0   no voseo OR every match is in --allow
 *   1   at least one voseo match
 *
 * Use --allow to exempt explicit references to the rule itself
 * (e.g. "NUNCA usar voseo" appearing in copy guidelines).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { findVoseoMatch } from "../lib/voseo-filter.mjs";

const SCRIPT_NAME = path.basename(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const opts = { roots: [], exts: [], allow: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--root") opts.roots.push(argv[++i] ?? "");
    else if (a === "--ext") {
      for (const e of (argv[++i] ?? "").split(",")) {
        if (e.trim()) opts.exts.push(e.trim().toLowerCase().replace(/^\./, ""));
      }
    } else if (a === "--allow") opts.allow.push(argv[++i] ?? "");
    else if (a === "--help" || a === "-h") {
      printHelp();
      process.exit(0);
    }
  }
  if (opts.roots.length === 0) {
    opts.roots = ["messages", "content"];
  }
  if (opts.exts.length === 0) {
    opts.exts = ["json", "mdx", "md"];
  }
  return opts;
}

function printHelp() {
  process.stdout.write(
    `${SCRIPT_NAME} — voseo scanner (Tantia ecosystem)\n\n` +
      `Usage: ${SCRIPT_NAME} [--root <path>] [--ext <list>] [--allow <substr>]\n\n` +
      `Defaults: --root messages --root content --ext json,mdx,md\n` +
      `Allow examples: --allow "no voseo" --allow "NUNCA usar voseo"\n`,
  );
}

function walk(dir, exts, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, exts, acc);
    } else {
      const ext = path.extname(entry.name).slice(1).toLowerCase();
      if (exts.includes(ext)) acc.push(full);
    }
  }
  return acc;
}

function lineNumber(content, index) {
  return content.slice(0, index).split("\n").length;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const violations = [];

  const files = [];
  for (const r of opts.roots) {
    const abs = path.isAbsolute(r) ? r : path.join(cwd, r);
    walk(abs, opts.exts, files);
  }

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const match = findVoseoMatch(content);
    if (!match) continue;
    const idx = content.toLowerCase().indexOf(match.toLowerCase());
    const surrounding = content.slice(
      Math.max(0, idx - 30),
      Math.min(content.length, idx + match.length + 30),
    );
    if (opts.allow.some((a) => surrounding.includes(a))) continue;
    violations.push({
      file: path.relative(cwd, file),
      line: idx >= 0 ? lineNumber(content, idx) : 0,
      match,
      context: surrounding.replace(/\n/g, " "),
    });
  }

  if (violations.length > 0) {
    process.stderr.write(
      `\n🚫 ${SCRIPT_NAME}: ${violations.length} voseo match(es)\n\n`,
    );
    for (const v of violations) {
      process.stderr.write(`  ${v.file}:${v.line}\n`);
      process.stderr.write(`    match:   ${v.match}\n`);
      process.stderr.write(`    context: …${v.context}…\n`);
    }
    process.stderr.write(
      `\nUse Mexican-neutral tuteo (tú). To exempt rule-references, pass --allow <substring>.\n`,
    );
    process.exit(1);
  }

  process.stdout.write(
    `${SCRIPT_NAME} ✓ scanned ${files.length} file(s) in ${opts.roots.join(", ")}\n`,
  );
}

main();
