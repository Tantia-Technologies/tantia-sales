#!/usr/bin/env node
/**
 * Generic confidentiality scanner. Reusable across any Tantia repo.
 *
 * Walks the configured roots looking for substrings that should never
 * appear in published artifacts (private repo paths, internal modules,
 * common live-secret formats). Patterns come from
 * `lib/confidentiality-patterns.mjs` so the entire ecosystem shares one
 * denylist.
 *
 * Usage:
 *   tantia-check-confidentiality [--root <path>] [--ext mdx,md,html] [--allow <substr>]
 *
 * Defaults:
 *   --root content   (relative to cwd)
 *   --ext mdx        (comma-separated; case-insensitive)
 *
 * Exit codes:
 *   0   no matches OR all matches are in --allow list
 *   1   at least one forbidden substring found
 *
 * Examples:
 *   tantia-check-confidentiality
 *   tantia-check-confidentiality --root public --ext html,md
 *   tantia-check-confidentiality --root . --ext md,mdx --allow tantia-core/docs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FORBIDDEN_PATTERNS } from "../lib/confidentiality-patterns.mjs";

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
  if (opts.roots.length === 0) opts.roots.push("content");
  if (opts.exts.length === 0) opts.exts.push("mdx");
  return opts;
}

function printHelp() {
  process.stdout.write(
    `${SCRIPT_NAME} — confidentiality scanner (Tantia ecosystem)\n\n` +
      `Usage: ${SCRIPT_NAME} [--root <path>] [--ext <ext1,ext2,...>] [--allow <substr>]\n\n` +
      `Options:\n` +
      `  --root <path>    Directory to scan (relative to cwd). Repeatable. Default: content\n` +
      `  --ext  <list>    Comma-separated file extensions. Default: mdx\n` +
      `  --allow <s>      Substring exempt from match. Repeatable.\n` +
      `  --help           Show this help.\n`,
  );
}

function walk(dir, exts, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") && entry.name !== "." && entry.name !== "..") {
      // skip hidden dirs/files (.git, .next, .vercel)
      continue;
    }
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

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const allowSet = new Set(opts.allow);
  const violations = [];

  const files = [];
  for (const r of opts.roots) {
    const abs = path.isAbsolute(r) ? r : path.join(cwd, r);
    walk(abs, opts.exts, files);
  }

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    for (const pattern of FORBIDDEN_PATTERNS) {
      const match = content.match(pattern);
      if (match && !allowSet.has(match[0])) {
        violations.push({
          file: path.relative(cwd, file),
          pattern: pattern.toString(),
          match: match[0],
        });
      }
    }
  }

  if (violations.length > 0) {
    process.stderr.write(
      `\n🚫 ${SCRIPT_NAME}: ${violations.length} forbidden match(es)\n\n`,
    );
    for (const v of violations) {
      process.stderr.write(`  ${v.file}\n`);
      process.stderr.write(`    pattern: ${v.pattern}\n`);
      process.stderr.write(`    match:   ${v.match}\n`);
    }
    process.stderr.write(
      `\nIf a match is legitimate, pass --allow <substring> or document it in CLAUDE.md.\n`,
    );
    process.exit(1);
  }

  process.stdout.write(
    `${SCRIPT_NAME} ✓ scanned ${files.length} file(s) in ${opts.roots.join(", ")}\n`,
  );
}

main();
