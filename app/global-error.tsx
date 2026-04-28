"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Last-resort error boundary. Catches errors thrown inside the root layout.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("[global-error]", error);
  }, [error]);

  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          background: "#0a1628",
          color: "#e6f1ff",
        }}
      >
        <div style={{ maxWidth: "32rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f87171" }}>500</p>
          <h1 style={{ marginTop: "0.5rem", fontSize: "1.875rem", fontWeight: 700 }}>Tantia Sales está fuera de servicio</h1>
          <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", lineHeight: 1.6, color: "#94a3b8" }}>
            Un error inesperado impidió cargar la aplicación. Intenta recargar.
          </p>
          {error.digest ? (
            <p style={{ marginTop: "1rem", fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', fontSize: "0.75rem", color: "#64748b" }}>Ref: {error.digest}</p>
          ) : null}
          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button type="button" onClick={() => reset()} style={{ height: "2.5rem", padding: "0 1.5rem", borderRadius: "0.5rem", border: "none", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>Intentar de nuevo</button>
            <Link href="/" style={{ height: "2.5rem", padding: "0 1.5rem", borderRadius: "0.5rem", border: "1px solid #334155", color: "#cbd5e1", fontWeight: 500, fontSize: "0.875rem", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>Ir al inicio</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
