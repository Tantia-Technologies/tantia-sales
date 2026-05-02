"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  // next-themes leaves `resolvedTheme` undefined during SSR and the first
  // client paint, then hydrates it from the cookie. Reading it directly
  // (with suppressHydrationWarning on the button) keeps SSR and CSR
  // markup aligned without the useState/useEffect mounted dance that
  // trips react-hooks/set-state-in-effect.
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
      aria-label={
        resolvedTheme
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      suppressHydrationWarning
    >
      {resolvedTheme === undefined ? (
        <span className="block h-4 w-4" aria-hidden />
      ) : isDark ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
