/**
 * Mexican-neutral / tuteo enforcement for any Spanish-language artifact
 * across the Tantia ecosystem (UI strings, product copy, AI prompts,
 * AI-generated text, documentation that ships to end users).
 *
 * Voseo argentino (vos, tenés, sabés, querés, podés, ...) breaks brand
 * voice and is a recurring issue when LLMs default to South American
 * Spanish. This filter is the post-output guard that drops voseo before
 * it reaches a published artifact.
 *
 * Triggers (case-insensitive, word-bounded):
 *   - the pronoun "vos"
 *   - high-frequency 2nd-person voseo verb endings
 *
 * Returning false means "the text is safe to ship". Adding rare verbs
 * is fine; pruning common ones is not.
 */

const VOSEO_PRONOUN = /\bvos\b/i;
const VOSEO_VERBS = /\b(?:tenés|sabés|querés|podés|hacés|sentís|venís|sos|andás|salís|comés|vivís|dormís|escribís|leés|mirás|usás|necesitás|debés|tenelo|hacelo)\b/i;

export function findVoseoMatch(text) {
  if (typeof text !== "string" || text.length === 0) return null;
  const pronoun = text.match(VOSEO_PRONOUN);
  if (pronoun) return pronoun[0];
  const verb = text.match(VOSEO_VERBS);
  if (verb) return verb[0];
  return null;
}

export function hasVoseo(text) {
  return findVoseoMatch(text) !== null;
}
