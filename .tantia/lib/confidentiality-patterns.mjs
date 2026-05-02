/**
 * Single source of truth for the confidentiality denylist used across the
 * entire Tantia ecosystem.
 *
 * Consumers:
 *   - tantia-kb (build gate over content/**.mdx + AI narrator post-filter)
 *   - tantia-courses, tantia-public, tantia-consulting (any repo that
 *     publishes user-facing artifacts)
 *
 * Patterns block:
 *   - Internal repo paths that should never appear in public output
 *     (tantia-core, tantia-sgc internals, apps/shell/lib/auth)
 *   - The TANTIA_AUTH_UNLOCK escape-hatch env var name
 *   - Common live secret formats (Stripe, AWS, GitHub PAT, private keys)
 *
 * Patterns explicitly allow `tantia-core/docs` and `tantia-core/public`
 * since those are intentionally public.
 *
 * If a pattern needs to change, do it here and bump the package minor
 * version so consumers know to `pnpm update @tantia-technologies/dev-tools`.
 */

export const FORBIDDEN_PATTERNS = [
  /tantia-core\/(?!docs|public)/i,
  /tantia-sgc\/(?!docs|public)/i,
  /apps\/shell\/lib\/auth/i,
  /\bTANTIA_AUTH_UNLOCK\b/,
  /\bsk_live_[A-Za-z0-9]+/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bghp_[A-Za-z0-9]{36,}\b/,
  /BEGIN\s+(?:RSA|OPENSSH|EC|PGP)\s+PRIVATE\s+KEY/,
];

export function findConfidentialMatch(text) {
  if (typeof text !== "string" || text.length === 0) return null;
  for (const pattern of FORBIDDEN_PATTERNS) {
    const match = text.match(pattern);
    if (match) return { pattern, match: match[0] };
  }
  return null;
}

export function isConfidential(text) {
  return findConfidentialMatch(text) !== null;
}
