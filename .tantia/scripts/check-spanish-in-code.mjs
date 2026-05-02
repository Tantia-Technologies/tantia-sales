#!/usr/bin/env node
/**
 * Spanish-in-code soft warning. Tantia rule: identifiers, comments, and
 * console output stay in English; Spanish is reserved for product copy
 * and i18n message catalogs.
 *
 * This is a soft check — exit code 0 even on matches by default. Pass
 * --strict to exit 1 instead.
 *
 * Usage:
 *   tantia-check-spanish-in-code [--root <path>] [--ext ts,tsx,js,jsx] [--strict]
 *
 * Defaults:
 *   --root app
 *   --root components
 *   --root lib
 *   --ext  ts,tsx,js,jsx
 *
 * Heuristic: scans for high-frequency Spanish words inside line/block
 * comments and string literals that look like console output (logger.x,
 * console.x, throw new Error). It is intentionally narrow — false
 * positives are worse than misses for a soft warning.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_NAME = path.basename(fileURLToPath(import.meta.url));

const SPANISH_TOKENS = [
  "usuario", "cliente", "producto", "pedido", "factura", "error",
  "guardar", "eliminar", "actualizar", "crear", "buscar", "cargando",
  "intenta", "exitoso", "fallido", "nuevo", "antes", "después",
  "mensaje", "configuración", "ajustes", "página", "cuenta", "contraseña",
  "correo", "fecha", "hora", "validación", "obligatorio", "permiso",
];

function parseArgs(argv) {
  const opts = { roots: [], exts: [], strict: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--root") opts.roots.push(argv[++i] ?? "");
    else if (a === "--ext") {
      for (const e of (argv[++i] ?? "").split(",")) {
        if (e.trim()) opts.exts.push(e.trim().toLowerCase().replace(/^\./, ""));
      }
    } else if (a === "--strict") opts.strict = true;
    else if (a === "--help" || a === "-h") {
      printHelp();
      process.exit(0);
    }
  }
  if (opts.roots.length === 0) opts.roots = ["app", "components", "lib"];
  if (opts.exts.length === 0) opts.exts = ["ts", "tsx", "js", "jsx"];
  return opts;
}

function printHelp() {
  process.stdout.write(
    `${SCRIPT_NAME} — Spanish-in-code soft warning (Tantia ecosystem)\n\n` +
      `Usage: ${SCRIPT_NAME} [--root <path>] [--ext <list>] [--strict]\n\n` +
      `Defaults: --root app --root components --root lib --ext ts,tsx,js,jsx\n` +
      `--strict: exit 1 on matches (default exits 0).\n`,
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
    } else if (
      !entry.name.endsWith(".test.ts") &&
      !entry.name.endsWith(".test.tsx")
    ) {
      const ext = path.extname(entry.name).slice(1).toLowerCase();
      if (exts.includes(ext)) acc.push(full);
    }
  }
  return acc;
}

const COMMENT_LINE = /\/\/(.+)$/gm;
const COMMENT_BLOCK = /\/\*([\s\S]*?)\*\//g;
const CONSOLE_STRING =
  /(?:console\.(?:log|warn|error|info)|throw new (?:Error|TypeError|RangeError)|new Error)\s*\(\s*[`'"]([^`'"]+)[`'"]/g;

function scanFile(content) {
  const matches = [];
  const seen = new Set();
  function check(text, kind) {
    const lower = text.toLowerCase();
    for (const tok of SPANISH_TOKENS) {
      const re = new RegExp(`\\b${tok}\\b`, "i");
      if (re.test(lower)) {
        const key = `${kind}:${tok}`;
        if (!seen.has(key)) {
          seen.add(key);
          matches.push({ kind, token: tok, snippet: text.trim().slice(0, 80) });
        }
      }
    }
  }
  let m;
  COMMENT_LINE.lastIndex = 0;
  while ((m = COMMENT_LINE.exec(content))) check(m[1], "comment-line");
  COMMENT_BLOCK.lastIndex = 0;
  while ((m = COMMENT_BLOCK.exec(content))) check(m[1], "comment-block");
  CONSOLE_STRING.lastIndex = 0;
  while ((m = CONSOLE_STRING.exec(content))) check(m[1], "console-string");
  return matches;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const files = [];
  for (const r of opts.roots) {
    const abs = path.isAbsolute(r) ? r : path.join(cwd, r);
    walk(abs, opts.exts, files);
  }

  const report = [];
  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const matches = scanFile(content);
    if (matches.length > 0) {
      report.push({ file: path.relative(cwd, file), matches });
    }
  }

  if (report.length === 0) {
    process.stdout.write(
      `${SCRIPT_NAME} ✓ scanned ${files.length} file(s), no Spanish in code\n`,
    );
    process.exit(0);
  }

  const stream = opts.strict ? process.stderr : process.stdout;
  stream.write(
    `\n${opts.strict ? "🚫" : "⚠️ "} ${SCRIPT_NAME}: Spanish detected in ${report.length} file(s)\n\n`,
  );
  for (const r of report) {
    stream.write(`  ${r.file}\n`);
    for (const m of r.matches.slice(0, 3)) {
      stream.write(`    [${m.kind}] "${m.token}" — ${m.snippet}\n`);
    }
    if (r.matches.length > 3) {
      stream.write(`    ... and ${r.matches.length - 3} more\n`);
    }
  }
  stream.write(
    `\nTantia rule: identifiers/comments/console output in English; Spanish only in product copy + messages/.\n`,
  );
  if (opts.strict) process.exit(1);
}

main();
