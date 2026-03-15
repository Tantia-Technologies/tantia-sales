export function HaloRing({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{ animation: "halo-pulse 8s ease-in-out infinite" }}
      >
        <defs>
          <filter id="halo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
          </filter>
          <filter id="halo-arc-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
        </defs>

        {/* Outer ambient glow */}
        <circle
          cx="300"
          cy="300"
          r="240"
          stroke="var(--primary, oklch(0.623 0.214 259))"
          strokeWidth="28"
          opacity="0.08"
          fill="none"
          filter="url(#halo-glow)"
        />

        {/* Crisp ring */}
        <circle
          cx="300"
          cy="300"
          r="240"
          stroke="var(--primary, oklch(0.623 0.214 259))"
          strokeWidth="2.5"
          opacity="0.35"
          fill="none"
          strokeDasharray="12 8"
        />

        {/* Arc glow */}
        <circle
          cx="300"
          cy="300"
          r="240"
          stroke="var(--primary, oklch(0.623 0.214 259))"
          strokeWidth="4"
          opacity="0.15"
          fill="none"
          filter="url(#halo-arc-glow)"
          strokeDasharray="80 440"
          strokeDashoffset="60"
        />
      </svg>
    </div>
  );
}
