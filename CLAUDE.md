# tantia-sales — Claude context

Repo: `tantia-sales` · Next.js 16 · React 19 · {{LANGUAGES}} · Vercel project `tantia/tantia-sales` · Domain: `{{DOMAIN}}`

{{ONE_LINE_PURPOSE — describe what this repo does in one sentence.}}

## Hard rules (Tantia ecosystem)

These apply to **every** repo. Source of truth: [`tantia-tools` README](../tools/README.md).

- **Code en inglés** — identifiers, comments, console output. Spanish solo en data UI y `messages/es.json`.
- **Tuteo neutro mexicano** — ZERO voseo (vos/tenés/sabés/querés/podés). Enforced by `tantia check voseo`.
- **TDD obligatorio** — `pnpm test` verde antes de push. Pre-push hook bloquea si falta script `test` o si los tests fallan.
- **Auth files lock** — `apps/shell/lib/auth.ts`, `proxy.ts`, `(erp)/layout.tsx`, etc. requieren `TANTIA_AUTH_UNLOCK=1`. Bloqueado por pre-commit y por hook de Claude.
- **Confidentiality** — nunca referenciar `tantia-core`, `tantia-sgc`, `apps/shell/lib/auth`, `TANTIA_AUTH_UNLOCK`, internal client names, secret formats. Enforced by `tantia check confidentiality` en repos públicos.
- **Push authorization** — nunca `git push` sin autorización explícita por commit/branch.
- **Vercel post-push** — monitorear estado de Vercel después de cada push.
- **AI features con fallback determinístico** — cualquier feature con LLM debe seguir funcionando aunque el provider esté caído.

## Repo-specific rules

{{REPO_SPECIFIC_RULES — list 3-7 rules unique to this repo (e.g. "tests run against real DB, never mocks").}}

## Commands

```bash
pnpm dev             # next dev --port 4400 --turbopack
pnpm test            # vitest run
pnpm test:watch      # vitest
pnpm typecheck       # tsc --noEmit
pnpm lint            # eslint
pnpm build           # next build
```

## Don'ts

{{DONTS — list things NOT to do here.}}

## Key files

{{KEY_FILES — annotated tour of the most important files.}}
