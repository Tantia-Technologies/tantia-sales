export const FORBIDDEN_PATTERNS: readonly RegExp[];

export interface ConfidentialMatch {
  pattern: RegExp;
  match: string;
}

export function findConfidentialMatch(text: string): ConfidentialMatch | null;
export function isConfidential(text: string): boolean;
