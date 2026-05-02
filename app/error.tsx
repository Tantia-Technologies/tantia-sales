"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

/**
 * Root error boundary. Keeps the root layout mounted when a page throws.
 */
export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[root-error]", error);
  }, [error]);

  return (
    <div
      role="alert"
      className="mx-auto flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center gap-4 px-6 py-16 text-center"
    >
      <span className="grid size-14 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-500">
        <AlertTriangle className="size-6" aria-hidden />
      </span>
      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-red-500">
        Error 500
      </p>
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Esta sección no respondió bien
      </h1>
      <p className="max-w-md text-sm text-neutral-500 dark:text-neutral-400">
        Algo en esta página falló al renderizar. Reintenta o vuelve al inicio.
      </p>
      {error.digest ? (
        <p className="font-mono text-[0.7rem] text-neutral-500">
          Ref: {error.digest}
        </p>
      ) : null}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <RefreshCw className="size-4" aria-hidden />
          Reintentar
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-lg border border-neutral-300 px-5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          <Home className="size-4" aria-hidden />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
